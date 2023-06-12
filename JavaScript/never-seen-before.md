## [function.length](https://zh.javascript.info/function-object#shu-xing-length)  

```js
function fn(a,b,c, ...d){
  console.log('in function', fn.length)
}
console.log('outside', fn.length)
fn()
```

## structuredClone 深拷貝 取代 JSON.stringify() + JSON.parse()
[Supper Type](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)
```js
let obj = {id:'1', text:'origin obj'}
let obj2 = structuredClone(obj)

obj2.text = 'new obj'
obj2.id = '2'

console.log(obj)
console.log(obj2)

let arr = [[1,2,3,4], [2,3,4,5],[[{something:'2'}]]]

let arr2 = structuredClone(arr)
arr[0][2] = 'string'
arr[2][0][0] = 45

console.log(arr)
console.log(arr2)
```

## 默认参数的计算
```
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() 仅在没有给定 text 时执行
  // 其运行结果将成为 text 的值
}
```
在 JavaScript 中，每次函数在没带个别参数的情况下被调用，默认参数会被计算出来。

在上面的例子中，如果传递了参数 text，那么 anotherFunction() 就不会被调用。

如果没传递参数 text，那么 anotherFunction() 就会被调用。
