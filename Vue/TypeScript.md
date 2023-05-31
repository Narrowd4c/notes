```
export default {
  props:{
    name:String, //string| undefined
    id:[String, Number], // string | number | undefined
    msg:{type:String, required:true},
    metadata:null // any
  }
}
```
### [擃展全局數性](https://cn.vuejs.org/guide/typescript/options-api.html#augmenting-global-properties)
```
import axios from 'axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $translate: (key: string) => string
  }
}
```

### 使用 PropType 这个工具类型来标记更复杂的 props 类型：
因為 props 没有办法指定多层级对象或函数签名之类的复杂类型。

import type {PropType} from 'vue';

interface Book {
  title:string
  author:string
  year:number
}

export default {
  props:{
    book:{
      type:Object as PropType<Book>,
      required:true
    },
    callback:Function as PropType<(id:number)=>void>
  }
}


### emit
```
export default defineComponent({
  emits: {
    addBook(payload: { bookName: string }) {
      // 执行运行时校验
      return payload.bookName.length > 0
    }
  },
  methods: {
    onSubmit() {
      this.$emit('addBook', {
        bookName: 123 // 类型错误
      })

      this.$emit('non-declared-event') // 类型错误
    }
  }
})
```

### computed

自動推導 return 的類型, 但也可以手動加

import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello!'
    }
  },
  computed: {
    // 显式标注返回类型
    greeting(): string {
      return this.message + '!'
    },

    // 标注一个可写的计算属性
    greetingUppercased: {
      get(): string {
        return this.greeting.toUpperCase()
      },
      set(newValue: string) {
        this.message = newValue.toUpperCase()
      }
    }
  }
})

### methods
  
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }
  }
})
