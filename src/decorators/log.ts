/**
 * 日志
 * @param module 当前模块名称
 */
function Log(module: string) {
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    var fun = descriptor.value;

    descriptor.value = function() {
      console.log(`Calling ${module} : ${name} with`, arguments);
      return fun.apply(this, arguments);
    };

    return descriptor;
  };
}
