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

## component

### fallthrough attributes
- class and style
  - <Component class='aqua' />  // render(渲染 or 編譯) 與內層的 class 合併
- v-on 
  - <MyButton @click='someMethod'/>  // 整個 component 內點擊會觸發
- 深層組件 
  <MyButton class='style' />  -> <BaseButton /> -> <button>lorem</button>
  请注意：

  透传的 attribute 不会包含 <MyButton> 上声明过的 props 或是针对 emits 声明事件的 v-on 侦听函数，换句话说，声明过的 props 和侦听函数被   <MyButton>“消费”了。

  透传的 attribute 若符合声明，也可以作为 props 传入 <BaseButton>。
- 禁用 
  - 在 components 設置 inheritAttrs:false
- $attrs
  在子元件中 使用 v-bind="$attrs". 指定元素繼承父層的屬性(父層 style 有 scoped 子層不會套用到父層 class)

