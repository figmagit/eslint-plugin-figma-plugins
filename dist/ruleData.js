"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecatedSyncPropSetters = exports.deprecatedSyncPropGetters = exports.deprecatedSyncMethods = exports.deprecatedIdParams = void 0;
exports.deprecatedIdParams = [
    {
        receiverType: 'VariablesAPI',
        method: 'createVariable',
        paramIndex: 1,
        wantParamType: 'VariableCollection',
        asyncObjectFetch: 'figma.variables.getVariableCollectionByIdAsync',
    },
];
exports.deprecatedSyncMethods = [
    {
        method: 'getNodeById',
        replacement: 'getNodeByIdAsync',
        receiverTypes: ['PluginAPI'],
    },
    {
        method: 'getStyleById',
        replacement: 'getStyleById',
        receiverTypes: ['PluginAPI'],
    },
    {
        method: 'getFileThumbnailNode',
        replacement: 'getFileThumbnailNodeAsync',
        receiverTypes: ['PluginAPI'],
    },
    {
        method: 'getLocalTextStyles',
        replacement: 'getLocalTextStylesAsync',
        receiverTypes: ['PluginAPI'],
    },
    {
        method: 'getLocalPaintStyles',
        replacement: 'getLocalPaintStylesAsync',
        receiverTypes: ['PluginAPI'],
    },
    {
        method: 'getLocalEffectStyles',
        replacement: 'getLocalEffectStylesAsync',
        receiverTypes: ['PluginAPI'],
    },
    {
        method: 'getLocalGridStyles',
        replacement: 'getLocalGridStylesAsync',
        receiverTypes: ['PluginAPI'],
    },
    {
        method: 'getVariableById',
        replacement: 'getVariableByIdAsync',
        receiverTypes: ['VariablesAPI'],
    },
    {
        method: 'getVariableCollectionById',
        replacement: 'getVariableCollectionByIdAsync',
        receiverTypes: ['VariablesAPI'],
    },
    {
        method: 'getLocalVariableCollections',
        replacement: 'getLocalVariableCollectionsAsync',
        receiverTypes: ['VariablesAPI'],
    },
    {
        method: 'getLocalVariables',
        replacement: 'getLocalVariablesAsync',
        receiverTypes: ['VariablesAPI'],
    },
    {
        method: 'setRangeTextStyle',
        replacement: 'setRangeTextStyleIdAsync',
        receiverTypes: ['NonResizableTextMixin'],
    },
    {
        method: 'setRangeFillStyle',
        replacement: 'setRangeFillStyleIdAsync',
        receiverTypes: ['NonResizableTextMixin'],
    },
];
exports.deprecatedSyncPropGetters = [
    {
        property: 'instances',
        replacement: 'getInstancesAsync',
        receiverTypes: ['ComponentNode'],
    },
    {
        property: 'consumers',
        replacement: 'getConsumersAsync',
        receiverTypes: ['BaseStyle'],
    },
    {
        property: 'mainComponent',
        replacement: 'getMainComponentAsync',
        receiverTypes: ['InstanceNode'],
    },
];
exports.deprecatedSyncPropSetters = [
    {
        property: 'currentPage',
        replacement: 'setCurrentPageAsync',
        receiverTypes: ['PluginAPI'],
    },
    {
        property: 'effectStyleId',
        replacement: 'setEffectStyleIdAsync',
        receiverTypes: ['BlendMixin'],
    },
    {
        property: 'fillStyleId',
        replacement: 'setFillStyleIdAsync',
        receiverTypes: ['MinimalFillsMixin'],
    },
    {
        property: 'gridStyleId',
        replacement: 'setGridStyleIdAsync',
        receiverTypes: ['BaseFrameMixin'],
    },
    {
        property: 'strokeStyleId',
        replacement: 'setStrokeStyleIdAsync',
        receiverTypes: ['MinimalStrokesMixin'],
    },
    {
        property: 'textStyleId',
        replacement: 'setTextStyleIdAsync',
        receiverTypes: ['TextNode'],
    },
    {
        property: 'backgroundStyleId',
        replacement: 'setFillStyleIdAsync',
        receiverTypes: ['DeprecatedBackgroundMixin'],
    },
];
