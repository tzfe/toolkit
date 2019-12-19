"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 格式化查询参数
 * @param conditions 查询条件 例如 {a:'name_like_or_unitName_like'}
 * @param backKey 后端解析key关键字名称
 */
function SearchKey(conditions, backKey) {
    if (backKey === void 0) { backKey = "searchKeys"; }
    return function (target, methodName, descriptor) {
        var fun = descriptor.value;
        descriptor.value = function () {
            var args = arguments;
            for (var index in args) {
                var argValue = args[index];
                for (var key in argValue) {
                    for (var condition in conditions) {
                        if (key === condition) {
                            argValue[backKey + "[" + conditions[condition] + "]"] = argValue[key];
                            delete argValue[key];
                        }
                    }
                }
                // 运行时确定因此这里是的 this 指向实例的。如果这里是箭头函数，this则指向undefined
                return fun.apply(this, args);
            }
        };
    };
}
exports.SearchKey = SearchKey;
