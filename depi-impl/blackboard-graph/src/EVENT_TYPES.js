export const EVENT_TYPES = {
    // Events from graph to vscode
    // -- Request state
    REQUEST_TOOLS_CONFIG: 'REQUEST_TOOLS_CONFIG',
    REQUEST_DEPI_MODEL: 'REQUEST_DEPI_MODEL',
    REQUEST_BLACKBOARD_MODEL: 'REQUEST_BLACKBOARD_MODEL',
    REQUEST_DEPENDENCY_GRAPH: 'REQUEST_DEPENDENCY_GRAPH',
    REQUEST_BRANCHES_AND_TAGS: 'REQUEST_BRANCHES_AND_TAGS',
    EXPAND_RESOURCE_GROUPS: 'EXPAND_RESOURCE_GROUPS',
    COLLAPSE_RESOURCE_GROUPS: 'COLLAPSE_RESOURCE_GROUPS',
    // -- Depi actions
    LINK_RESOURCES: 'LINK_RESOURCES',
    SAVE_BLACKBOARD: 'SAVE_BLACKBOARD',
    CLEAR_BLACKBOARD: 'CLEAR_BLACKBOARD',
    REMOVE_ENTRIES_FROM_BLACKBOARD: 'REMOVE_ENTRIES_FROM_BLACKBOARD',
    DELETE_ENTRIES_FROM_DEPI: 'DELETE_ENTRIES_FROM_DEPI',
    MARK_LINKS_CLEAN: 'MARK_LINKS_CLEAN',
    MARK_INFERRED_DIRTINESS_CLEAN: 'MARK_INFERRED_DIRTINESS_CLEAN',
    MARK_ALL_CLEAN: 'MARK_ALL_CLEAN',
    EDIT_RESOURCE_GROUP: 'EDIT_RESOURCE_GROUP',
    // -- UI events
    REVEAL_IN_EDITOR: 'REVEAL_IN_EDITOR',
    VIEW_RESOURCE_DIFF: 'VIEW_RESOURCE_DIFF',

    // Events from vscode
    TOOLS_CONFIG: 'TOOLS_CONFIG',
    DEPI_MODEL: 'DEPI_MODEL',
    BLACKBOARD_MODEL: 'BLACKBOARD_MODEL',
    DEPENDENCY_GRAPH: 'DEPENDENCY_GRAPH',
    ERROR_MESSAGE: 'ERROR_MESSAGE',
    BRANCHES_AND_TAGS: 'BRANCHES_AND_TAGS',
};
