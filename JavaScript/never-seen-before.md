## [function.length](https://zh.javascript.info/function-object#shu-xing-length)  
function fn(a,b,c, ...d){
  console.log('in function', fn.length)
}
console.log('outside', fn.length)
fn()


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
