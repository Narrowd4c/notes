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