# notes

## html
Canvas、SVG -- 用于绘画的元素，canvas绘制的图片会失真而SVG绘制的不会失真。
video、audio -- 用于播放视频和音频的媒体。
Drag 、Drop -- 用于拖放的 。
Geolocation -- 用于获取地理位置。
localStorage、sessionStorage -- 用于本地离线存储。
webSQL、IndexDB -- 前端数据库操作，由于安全性极低，目前h5已放弃。
web Worker -- 独立于其他脚本，不影响页面性能运行在后台的javascript。
webSocket -- 单个TCP连接上进行全双工通讯的协议。
新的特殊内容元素 -- 如：article、footer、header、nav、section。
新的表单控件 -- 如：date、time、email、url、search。


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
position: fixed 能够相对于浏览器窗口放置有一个条件，那就是不能有任何祖先元素设置了 transform、perspective 或者 filter 样式属性。也就是说如果我们想要用 CSS transform 为祖先节点 <div class="outer"> 设置动画，就会不小心破坏模态框的布局！

这个模态框的 z-index 受限于它的容器元素。如果有其他元素与 <div class="outer"> 重叠并有更高的 z-index，则它会覆盖住我们的模态框。
  
  
https://www.zhangxinxu.com/wordpress/2020/03/position-sticky-rules/
设置了position:sticky粘性定位的元素的父元素如果高度计算值和粘性定位元素一样高，则垂直滚动的时候，粘性定位效果是不会出现的。
  
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
