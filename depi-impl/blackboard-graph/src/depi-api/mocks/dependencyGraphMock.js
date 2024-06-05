export const dependencyGraphMock = {
    links: [
        {
            source: {
                toolId: 'git',
                resourceGroupName: 'Evidence.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/Evidence.git',
                resourceGroupVersion: 'b859fcf89d045188d98d6268d1213532075aca6a',
                name: 'proof.zip',
                url: '/proof.zip',
                id: '/proof.zip',
                deleted: false,
            },
            target: {
                toolId: 'git',
                resourceGroupName: 'python-sources.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/python-sources.git',
                resourceGroupVersion: 'fa00b1afb1220c37298c0ea3c8d8767cffe7d8ba',
                name: 'pythonFile.py',
                url: '/pythonFile.py',
                id: '/pythonFile.py',
                deleted: false,
            },
            deleted: false,
            dirty: false,
            lastCleanVersion: '',
            inferredDirtiness: [
                {
                    resource: {
                        toolId: 'git',
                        resourceGroupName: 'c-sources.git',
                        resourceGroupUrl: 'http://localhost:3001/patrik/c-sources.git',
                        resourceGroupVersion: '6d345396ac27cb7e1af5ff9d94d6e02600805363',
                        name: 'cFile.c',
                        url: '/folder/cFile.c',
                        id: '/folder/cFile.c',
                        deleted: false,
                    },
                    lastCleanVersion: 'b4779ee0c897a85b55aa67c46af008be3580be55',
                },
            ],
        },
        {
            source: {
                toolId: 'git',
                resourceGroupName: 'python-sources.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/python-sources.git',
                resourceGroupVersion: 'fa00b1afb1220c37298c0ea3c8d8767cffe7d8ba',
                name: 'pythonFile.py',
                url: '/pythonFile.py',
                id: '/pythonFile.py',
                deleted: false,
            },
            target: {
                toolId: 'git',
                resourceGroupName: 'c-sources.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/c-sources.git',
                resourceGroupVersion: '6d345396ac27cb7e1af5ff9d94d6e02600805363',
                name: 'cFile.c',
                url: '/folder/cFile.c',
                id: '/folder/cFile.c',
                deleted: false,
            },
            deleted: false,
            dirty: true,
            lastCleanVersion: 'b4779ee0c897a85b55aa67c46af008be3580be55',
            inferredDirtiness: [],
        },
        {
            source: {
                toolId: 'git',
                resourceGroupName: 'c-sources.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/c-sources.git',
                resourceGroupVersion: '6d345396ac27cb7e1af5ff9d94d6e02600805363',
                name: 'cFile.c',
                url: '/folder/cFile.c',
                id: '/folder/cFile.c',
                deleted: false,
            },
            target: {
                toolId: 'git',
                resourceGroupName: 'Evidence.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/Evidence.git',
                resourceGroupVersion: 'b859fcf89d045188d98d6268d1213532075aca6a',
                name: 'proof.zip',
                url: '/proof.zip',
                id: '/proof.zip',
                deleted: false,
            },
            deleted: false,
            dirty: false,
            lastCleanVersion: '',
            inferredDirtiness: [],
        },
    ],
    resource: {
        toolId: 'git',
        resourceGroupName: 'Evidence.git',
        resourceGroupUrl: 'http://localhost:3001/patrik/Evidence.git',
        resourceGroupVersion: 'b859fcf89d045188d98d6268d1213532075aca6a',
        name: 'proof.zip',
        url: '/proof.zip',
        id: '/proof.zip',
    },
    dependants: false,
};

export const dependantsGraphMock = {
    links: [
        {
            target: {
                toolId: 'git',
                resourceGroupName: 'Evidence.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/Evidence.git',
                resourceGroupVersion: 'b859fcf89d045188d98d6268d1213532075aca6a',
                name: 'proof.zip',
                url: '/proof.zip',
                id: '/proof.zip',
                deleted: false,
            },
            source: {
                toolId: 'git',
                resourceGroupName: 'python-sources.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/python-sources.git',
                resourceGroupVersion: 'fa00b1afb1220c37298c0ea3c8d8767cffe7d8ba',
                name: 'pythonFile.py',
                url: '/pythonFile.py',
                id: '/pythonFile.py',
                deleted: false,
            },
            deleted: false,
            dirty: false,
            lastCleanVersion: '',
            inferredDirtiness: [],
        },
        {
            target: {
                toolId: 'git',
                resourceGroupName: 'Evidence.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/Evidence.git',
                resourceGroupVersion: 'b859fcf89d045188d98d6268d1213532075aca6a',
                name: 'proof.zip',
                url: '/proof.zip',
                id: '/proof.zip',
                deleted: false,
            },
            source: {
                toolId: 'git',
                resourceGroupName: 'python-sources.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/python-sources.git',
                resourceGroupVersion: 'fa00b1afb1220c37298c0ea3c8d8767cffe7d8ba',
                name: 'pythonFile2.py',
                url: '/pythonFile2.py',
                id: '/pythonFile2.py',
                deleted: false,
            },
            deleted: false,
            dirty: false,
            lastCleanVersion: '',
            inferredDirtiness: [],
        },
        {
            target: {
                toolId: 'git',
                resourceGroupName: 'python-sources.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/python-sources.git',
                resourceGroupVersion: 'fa00b1afb1220c37298c0ea3c8d8767cffe7d8ba',
                name: 'pythonFile.py',
                url: '/pythonFile.py',
                id: '/pythonFile.py',
                deleted: false,
            },
            source: {
                toolId: 'git',
                resourceGroupName: 'c-sources.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/c-sources.git',
                resourceGroupVersion: '6d345396ac27cb7e1af5ff9d94d6e02600805363',
                name: 'cFile.c',
                url: '/folder/cFile.c',
                id: '/folder/cFile.c',
                deleted: false,
            },
            deleted: false,
            dirty: true,
            lastCleanVersion: '',
            inferredDirtiness: [],
        },
        {
            source: {
                toolId: 'git',
                resourceGroupName: 'Evidence.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/Evidence.git',
                resourceGroupVersion: 'b859fcf89d045188d98d6268d1213532075aca6a',
                name: 'proof.zip',
                url: '/proof.zip',
                id: '/proof.zip',
                deleted: false,
            },
            target: {
                toolId: 'git',
                resourceGroupName: 'c-sources.git',
                resourceGroupUrl: 'http://localhost:3001/patrik/c-sources.git',
                resourceGroupVersion: '6d345396ac27cb7e1af5ff9d94d6e02600805363',
                name: 'cFile.c',
                url: '/folder/cFile.c',
                id: '/folder/cFile.c',
                deleted: false,
            },
            deleted: false,
            dirty: false,
            lastCleanVersion: '',
            inferredDirtiness: [],
        },
    ],
    resource: {
        toolId: 'git',
        resourceGroupName: 'Evidence.git',
        resourceGroupUrl: 'http://localhost:3001/patrik/Evidence.git',
        resourceGroupVersion: 'b859fcf89d045188d98d6268d1213532075aca6a',
        name: 'proof.zip',
        url: '/proof.zip',
        id: '/proof.zip',
    },
    dependants: true,
};
