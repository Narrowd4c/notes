```go=
type Vertex struct {
    value int   // vertex 不是大寫沒辦法在其他 package 使用
}

func (v Vertex)getvalue() int { // 用 func 去取
    return v.value
}
```


