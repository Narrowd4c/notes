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