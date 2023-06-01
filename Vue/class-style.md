### class Obj
```
<div :class='{active:true, 'text-danger':isError}'></div>
<div :class='classObj'> // classObj = {active:true, 'text-danger':isError}
```
### class Array
```
<div :class='[activeClass, errorClass]'></div>
<div :class='[isActive? 'activeClass' :errorClass, someClass]'></div>
<div :class='[{active:isActive}, errorClass]'>

data(){
  return{
    isActive:true,
    activeClass:'active',
    errorClass:'error',
    someClass:'some'
  }
}
```
### computed return obj, array

### Component
```
<Comp class='parent'>
//
<template>
  <div></div>
  <div :class="$attrs.class"></div> // 
</template>
```

### Style obj + array
```
<div :style="{color: activeColor, fontSize:fontsize + 'px'}">
<div :style="styleObj">
<div :style='[baseStyles, overridingStyles]'>
```


### Auto-prefixing
当你在 :style 中使用了需要浏览器特殊前缀的 CSS 属性时，Vue 会自动为他们加上相应的前缀。Vue 是在运行时检查该属性是否支持在当前浏览器中使用。如果浏览器不支持某个属性，那么将尝试加上各个浏览器特殊前缀，以找到哪一个是被支持的。

### Multiple Values
```
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```
