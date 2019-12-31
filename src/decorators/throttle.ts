/**
 * 节流
 * @param time
 */
export function Throttle(time: number) {
  return function(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {};
}
