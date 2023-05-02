# notes

## js 
在 JavaScript 中，模組使用的是嚴格模式，因此 this 關鍵字的行為與非模組的情況有所不同。

### **在嚴格模式下，this 的值不會被自動設置為全局對象，而是為 undefined。**  
因此，在模組中使用 this 關鍵字時，會出現錯誤，無法訪問對象的屬性。


```main.js
"use strict";
let text = '全域'
function fn(){
  console.log(this) // undefined
  console.log(this.text) // error
}
```
## vue

### v-model:
- 單一 checkbox 可設置 true-value & false-value
selest option value 可以綁定： v-for="item in items" :value="item.value" :key="item.id"
select 多選如何不用按 shift ？
v-model.lazy.number.trim

data(){
  return{
    isTrue:true,
    isFalse:false,
  }
}
methods:{
  change(){
    this.isTrue = !this.isTrue
  }
  change(key){
    this[key] = !this.[key]
  }
}

## v-on

mutilple event **無法傳入參數**

<button @="{
  click: "useClick",
  mousedown: "useMouse"
}">

修飾符:
keyup.enter
event: .stop, .prevent, .self, .once, .capture

v-on DOM
@click="warn('test', $event)"
@click="(event)=>warn('test', event)"
e.keyCode
