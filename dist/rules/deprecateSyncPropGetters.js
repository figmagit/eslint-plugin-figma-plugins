"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecateSyncPropGetters = void 0;
const typescript_estree_1 = require("@typescript-eslint/typescript-estree");
const util_1 = require("../util");
const ruleData_1 = require("../ruleData");
exports.deprecateSyncPropGetters = (0, util_1.createPluginRule)({
    name: 'deprecate-sync-prop-getters',
    meta: {
        docs: {
            description: 'Deprecated synchronous property getter',
        },
        fixable: 'code',
        messages: {
            useReplacement: '{{receiverType}}.{{property}} is deprecated. Please use {{replacement}} instead.',
        },
        schema: [],
        type: 'problem',
    },
    defaultOptions: [],
    create(context) {
        return {
            MemberExpression(node) {
                const prop = node.property;
                if (prop.type !== typescript_estree_1.AST_NODE_TYPES.Identifier) {
                    return;
                }
                const deprecation = ruleData_1.deprecatedSyncPropGetters.find((g) => g.property === prop.name);
                if (!deprecation) {
                    return;
                }
                const receiver = node.object;
                const match = (0, util_1.matchAncestorTypes)(context, receiver, deprecation.receiverTypes);
                if (!match) {
                    return;
                }
                context.report({
                    node,
                    messageId: 'useReplacement',
                    data: {
                        receiverType: (0, util_1.getTypeName)(match.nodeType, match.matchedAncestorType),
                        property: deprecation.property,
                        replacement: deprecation.replacement,
                    },
                    fix(fixer) {
                        return (0, util_1.addAsyncCallFix)({
                            context,
                            fixer,
                            expression: node,
                            receiver,
                            asyncIdentifier: deprecation.replacement,
                            args: [],
                        });
                    },
                });
            },
        };
    },
});
