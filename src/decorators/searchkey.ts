interface IConditions {
  [key: string]: string;
}

/**
 * 格式化查询参数
 * @param conditions 查询条件 例如 {a:'name_like_or_unitName_like'}
 * @param backKey 后端解析key关键字名称
 */
export function SearchKey(conditions: IConditions, backKey = "searchKeys") {
  return function(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const fun = descriptor.value;
    descriptor.value = function() {
      let args = arguments;

      for (let argValue of Object.values(args)) {
        if (argValue instanceof Object) {
          for (let key in argValue) {
            for (let condition in conditions) {
              if (key === condition) {
                argValue[`${backKey}[${conditions[condition]}]`] =
                  argValue[key];
                delete argValue[key];
              }
            }
          }
        }

        // 运行时确定因此这里是的 this 指向实例的。如果这里是箭头函数，this则指向undefined
        return fun.apply(this, args);
      }
    };
  };
}
