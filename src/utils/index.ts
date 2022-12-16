/**
 * @description: 防抖函数，在给定的时间内触发多次，只执行一次
 * @param {Function} func  需要执行的函数
 * @param {Number} wait  等待的时长毫秒
 * @return {Function}  包装好的防抖函数
 */
export const debounce = (func: Function, wait: number) => {
  let timer: NodeJS.Timeout, context: Function;
  return function (this: any, ...args: any) {
    context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.call(context, args);
    }, wait);
  };
};
