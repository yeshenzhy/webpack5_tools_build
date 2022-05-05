// 13. 深拷贝
export const deepCopy = (obj) => {
  if (!obj || typeof obj !== 'object') {
    throw new Error('参数不是一个object')
    return;
  }
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      newObj[key] = deepCopy(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

// 11. 函数科里化
export const curry = (fn) => {
  const judge = (...args) => {
    if (args.length === fn.length) return fn(...args)
    else return (...arg) => judge(...args, ...arg)
  }
  return judge

}

// 6.防抖函数
export const debounce = (fn, delay = 300, immediate = false) => {
  let timer = null;
  let isExecute = false;
  let result;
  return function () {
    if (immediate && !isExecute) {
      result = fn.apply(_self, args)
      isExecute = true;
    }
    if (timer) {
      clearTimeout(timer)
      timer = null;
    }
    timer = setTimeout(() => {
      result = fn.apply(this, arguments)
    }, delay)
    return result
  }
}

// 7.节流函数
export const throttle = (fn, delay = 300) => {
  let currentTime = Date.now();
  let result;
  return function () {
    const timeNow = Date.now();
    if (timeNow - currentTime >= delay) {
      result = fn.apply(this, arguments)
      currentTime = Date.now();
    }
    return result;
  }
}