
document.querySelector 可以用類似 CSS 的撰寫方式選取
 HTML:
```html
<div id="targetID">
  <p>我被 elementID 選取到了</p>
</div>
<!-- 以下是 span 被選取到 -->
<div class="targetClass">
  <p>
    <span>我被 elementClass 選取到了</span>
  </p>
</div>
```
JS:
```js
const elementID = document.querySelector("#targetID p");
const elementClass = document.querySelector(".targetClass > p > span");
```
