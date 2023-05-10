# notes


## css 
[flex 不生效的屬性](https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#%E4%B8%8D%E5%B0%8D%E5%BD%88%E6%80%A7%E7%9B%92%E5%AD%90%E7%94%9F%E6%95%88%E7%9A%84%E5%B1%AC%E6%80%A7)  
在 row 方向上，沒有固定高度的容器中的自動邊距(margin-bottom:auto)不會生效。
```html
<div class='container' style="display:flex">
  <div class="box1"></div>
  <div class="box2">
    <div class="box3" style="margin-bottom:auto"></div>
    <div class="box4"></div>
  </div>
</div>

```

## js 
在 JavaScript 中，模組使用的是嚴格模式，因此 this 關鍵字的行為與非模組的情況有所不同。

### **在嚴格模式下，this 的值不會被自動設置為全局對象，而是為 undefined。**  
因此，在模組中使用 this 關鍵字時，會出現錯誤，無法訪問對象的屬性。


```main.js
"use strict";
var text = '全域變數'
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
```js
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
```
## v-on

mutilple event **無法傳入參數**
```js
<button @="{
  click: "useClick",
  mousedown: "useMouse"
}">
```
修飾符:
keyup.enter
event: .stop, .prevent, .self, .once, .capture

v-on DOM
```
@click="warn('test', $event)"
@click="(event)=>warn('test', event)"
```
e.keyCode

### computed
```
<div @click="total = val">click</div>
// (total = val) -> set(val) set 先觸發再 get
computed:{
  total:{
    get(){},
    set(value){
      
    }
  }
```
