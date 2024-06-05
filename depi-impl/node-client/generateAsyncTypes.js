/**
 * Post-processes the DepiClient in the generated proto*d.ts file and 
 * adds type-stubs for Async methods. Note that in order to define these
 * methods on the client - src/pbs/addAsyncMethods.js must be called on 
 * any new instance of the DepiClient.
 */
const tsFileStruct = require('ts-file-parser');
const fs = require('fs');

var filePath = "./src/pbs/depi_grpc_pb.d.ts";
var decls = fs.readFileSync(filePath).toString();
var jsonStructure = tsFileStruct.parseStruct(decls, {}, filePath);

const depiClient = jsonStructure.classes.find(c => c.name === 'DepiClient');

if (!depiClient) {
    throw new Error('Could not find DepiClient');
}

const asyncMethodStrings = [];
let lastMethodEnd = 0;

function dumpAsyncMethod(name, args, returnType) {
    const str =  `  ${name}(${args.join(',')}): Promise<${returnType}>;`;
    asyncMethodStrings.push(str);
}

depiClient.methods.forEach((method) => {
    lastMethodEnd = method.end > lastMethodEnd ? method.end : lastMethodEnd;

    if (method.returnType.basicName !== 'ClientUnaryCall') {
        console.log('Skipping non-ClientUnaryCall method', method.name, method.returnType.basicName);
        return;
    }

    const callback = method.arguments.pop();

    dumpAsyncMethod(`${method.name}Async`, method.arguments.map(arg => arg.text), callback.type.typeArguments[0].typeName);
});

const extendedFileContent = `${decls.substring(0, lastMethodEnd)}\n  // Async methods generated by ./generateAsyncTypes.js\
\n${asyncMethodStrings.join('\n')}${decls.substring(lastMethodEnd)}`;

fs.writeFileSync(filePath, extendedFileContent, {encoding: 'utf-8'});