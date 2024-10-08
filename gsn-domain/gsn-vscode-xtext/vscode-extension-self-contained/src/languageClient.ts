import * as vscode from 'vscode';
import * as os from 'os';
import * as net from 'net';
import * as path from 'path';

import { LanguageClient, LanguageClientOptions, StreamInfo } from 'vscode-languageclient/node';

export function initializeLanguageClient(context: vscode.ExtensionContext): LanguageClient {
    let clientOptions: LanguageClientOptions = {
        documentSelector: ['gsn'],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/*.*'),
        },
    };

    let serverOptions: any = null;

    if (process.env.SEPARATE_SERVER) {
        // The server is a started as a separate app and listens on port 5007
        let connectionInfo = {
            port: 5007,
        };

        serverOptions = () => {
            // Connect to language server via socket
            let socket = net.connect(connectionInfo);
            let result: StreamInfo = {
                writer: socket,
                reader: socket,
            };
            return Promise.resolve(result);
        };
    } else {
        // The server is a locally installed in src/gsn
        let launcher = 'gsn-standalone';
        let options = {};

        if (os.platform() === 'win32') {
            launcher = 'gsn-standalone.bat';
            options = { shell: true };
        }

        let script = context.asAbsolutePath(path.join('src', 'gsn', 'bin', launcher));

        serverOptions = {
            run: { command: script, options },
            debug: { command: script, args: [], options: { env: createDebugEnv() } },
        };
    }

    return new LanguageClient('Xtext Server', serverOptions, clientOptions);
}

function createDebugEnv() {
    return Object.assign(
        {
            JAVA_OPTS: '-Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n,quiet=y',
        },
        process.env
    );
}