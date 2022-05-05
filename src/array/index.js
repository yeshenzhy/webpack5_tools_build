// 数组扁平化
export const flatten = (arr, depth = Infinity) => {
  let result = [];
  if (Object.prototype.toString.call(arr).slice(8,-1) !== 'Array') {
    throw new TypeError('请传数组类型')
  }
  arr.forEach(e => {
    if (Array.isArray(e)) {
      if (depth === Infinity) {
        result = [...result, ...flatten(e)];
      } else {
        if (depth === 0) {
          result = [...result, e];
        } else {
          result = [...result, ...flatten(e, depth -1)];
        }
      }
    } else {
      result.push(e)
    }
  })
  return result
}