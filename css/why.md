 ## FlexBox 在 row 方向上，沒有固定高度的容器中的自動邊距(margin-bottom:auto)不會生效。
[flex 不生效的屬性](https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#%E4%B8%8D%E5%B0%8D%E5%BD%88%E6%80%A7%E7%9B%92%E5%AD%90%E7%94%9F%E6%95%88%E7%9A%84%E5%B1%AC%E6%80%A7)  
```html
<!-- html 結構範例 --> 
<div class='container' style="display:flex">
  <div class="box1"></div>
  <div class="box2">
    <div class="box3" style="margin-bottom:auto"></div> 
    <div class="box4"></div>
  </div>
</div>
```

## 僅設定 overflow-y:hidden; 但 overflow-x 自動加上滾輪? 
https://stackoverflow.com/questions/6421966/css-overflow-x-visible-and-overflow-y-hidden-causing-scrollbar-issue


## [position absloute default value](https://stackoverflow.com/questions/19968979/what-are-the-default-top-left-botton-or-right-values-when-positionabsolute-is)


### position :fixed; 当元素祖先的 transform、perspective、filter 或 backdrop-filter 属性非 none 时，容器由视口改为该祖先。
https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
  
### 设置了position:sticky粘性定位的元素的父元素如果高度计算值和粘性定位元素一样高，则垂直滚动的时候，粘性定位效果是不会出现的。
https://www.zhangxinxu.com/wordpress/2020/03/position-sticky-rules/
