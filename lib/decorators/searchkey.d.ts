/**
 * 格式化查询参数
 * @param conditions 查询条件 例如 {a:'name_like_or_unitName_like'}
 * @param backKey 后端解析key关键字名称
 */
export declare function SearchKey(conditions: {
    [key: string]: string;
}, backKey?: string): (target: any, methodName: string, descriptor: PropertyDescriptor) => void;
