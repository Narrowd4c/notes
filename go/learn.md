tour of Go
===

package 只能是 func, const, var

## Export Names 
首字大寫

```go
package main
import (
    "fmt"
)
func main(){
    fmt.Println(...) //會斷行
    fmt.Print(...)   //不斷行接續
    
    fmt.Printf("Type of %T %v", a) // 帶入參數
    // %T type
    // %v value
}

go run main.go
```
## 宣告
```go
const  //常量
var  //變量
:=  // 代替 var 的簡寫 , 只能用在函式內
var(
    c string = "error"
    k int = 123
    true bool = false
)
```
## 零值
没有明确初始值的变量声明会被赋予它们的 零值。

零值是：

数值类型为 0，
布尔类型为 false，
字符串为 ""（空字符串）。
```go
package main

import "fmt"

func main() {
	var i int
	var f float64
	var b bool
	var s string
	fmt.Printf("%v %v %v %q\n", i, f, b, s)
}
```

%T  => type
%g => value
%v => value

## 基本類型

```
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // uint8 的别名

rune // int32 的别名
    // 表示一个 Unicode 码点

float32 float64

complex64 complex128
int 类型最大可以存储一个 64 位的整数，有时会更小
int 可以存放最大64位的整数，根据平台不同有时会更少。

int, uint 和 uintptr 在 32 位系统上通常为 32 位宽，在 64 位系统上则为 64 位宽。 当你需要一个整数值时应使用 int 类型，除非你有特殊的理由使用固定大小或无符号的整数类型。

```
```go=
package main

import (
	"fmt"
	"math/cmplx"
)

var (
	ToBe   bool       = false
	MaxInt uint8     = 1024
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	fmt.Printf("Type: %T Value: %v\n", z, z)
}

```
## 函式
- 同類型 可在最後定義類型 
```go

func add(x, y int) int{
    return x + y
}
```
- 回傳值類型 定義
```go
func add(sum int)(x, y int){
    x = sum + 12
    y = sum - 22
    return
}
```
---------------------------
```go=
package main

import (
	"fmt"
	"math"
)
func main(){
    // 宣告
	a,b :=add("test",3)
	fmt.Println(a[6: ],b,"String" ,a, math.Sqrt(25))
}
func add(x string, y int) (str string, integer int){
	str = x + "end"
	integer = y*32
	return  str, integer
}
```
## 类型转换
Go 在不同类型的项之间赋值时需要显式转换
```
var i int = 42
var f float64 = float64(i)
```

```go=
package main

import (
	"fmt"
	"math"
)

func main() {
	var x, y int = 3, 4
	var f float64 = math.Sqrt(float64(x*x + y*y))
    z := uint(f)
	fmt.Println(x, y, z, f)
}

```
## 类型推导
```go=
var i int = 23
j := i 
```
不过当右边包含<font color=#FF0000  size=4>未指明类型</font>的数值常量时，新变量的类型就可能是 int, float64 或 complex128 了，这取决于常量的精度：

```go=

i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128
```



# Other
```
math.Sqrt(25)
%T %v %q %g
```


```go=
package main

import (
	"fmt"
	"math/rand"
)

func main() {
	fmt.Println("My favorite number is", rand.Intn(10))
}

```




# 2/6

## defer

後進先出 LIFO 

接收父層的資料

注意 記憶的參數在哪一層

其他函式執行完才執行


loop variable i captured by func literal

```go=
package main

import (
	"fmt"
)

func deferTest()  {
	for i:=0;i < 10; i++ {
		defer func() {
			fmt.Println(i)  // 記憶參數 i  ; i 變動
		}()
	}
}

func main() {
	deferTest()
}

// 10 10 10 10 10 ....
```
改成 // defer 帶入參數
```go=
package main

import (
	"fmt"
)

func deferTest()  {
	for i:=0;i < 10; i++ {
		defer func(i int) {
			fmt.Println(i)
		}(i)
	}
}

func main() {
	deferTest()
}
//output 9 8 7 ... 0 
```
或是 重新聲明

```go=
package main

import (
	"fmt"
)

func deferTest() {
	for i := 0; i < 10; i++ {
		i := i 
		defer func() {
			fmt.Println(i)  
		}()
	}
}

func main() {
	deferTest()
}
```


channel 也有 loop variable i captured by func literal

```go=
package main

import (
	"fmt"
	"time"
)

func send(info chan string){
 	word := [...]string{"A", "B", "C", "D", "E", "F", "G", "H", "I", "J"}
	for _, s := range word {
		info <- s
	}
	close(info)
}

func main(){
	info := make(chan string)
	go send(info)

	for w := range info {
		go func(){
			time.Sleep(time.Millisecond)
			fmt.Println(w)
		}()
	}
	time.Sleep(time.Second)
}
```
```go=
解決方式也是一樣
```


[defer panic recover](https://pjchender.dev/golang/defer-panic-recovery/)

defer 可以用在具名的函式回傳變數
```go=

package main

import "fmt"

func c() (i, a int) {
	defer func() {
		i = 20 + a
	}()
	defer func(){
		a = 50 + i
	}()
	defer func(){
		fmt.Println("i : ", i, "a : ", a)
	}()
	return 22 ,12
}

func main() {
	fmt.Println(c())
}

```

```go=
func f(){
    defer func(){
        r := recover()  // r 接收 panic 的參數
        if r != nil {
            fmt.Println("Recoverd in f", r)
        }
    }
}



```
```go=
// 程式來源：https://blog.golang.org/defer-panic-and-recover
func main() {
    f()
    fmt.Println("Returned normally from f.")
}

func f() {
    defer func() {
    // 可以取得 panic 的回傳值
        r := recover()
        if r != nil {
            fmt.Println("Recovered in f", r)
        }
    }()

    fmt.Println("Calling g.")
    g(0)
    fmt.Println("Returned normally from g.")
}

func g(i int) {
    if i > 3 {
    panicNumber := fmt.Sprintf("%v", i)

        fmt.Println("Panicking!", panicNUmber)
        // log.Fatalln(panicNumber)  // 如果使用 fatal 程式會直接終止，defer 也不會執行到
        panic(panicNumber)
    }
    defer fmt.Println("Defer in g", i)
    fmt.Println("Printing in g", i)
    g(i + 1)
}
```




# range


[Go for 语句的常见“坑”与避坑方法](https://blog.csdn.net/ManNiaoQinFen/article/details/121533596?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-121533596-blog-118313499.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-121533596-blog-118313499.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=4)


```go=
package main

import "fmt"
// 預期
func main(){
    a := [5]int{1,2,3,4,5}  //陣列才會 ， slice 不影響
    r := make([]int, 5,5)
    fmt.Println("origin a = ", a)
    for i, v := range a {  // range 在陣列情況 (slice 不影響)下淺拷貝陣列 所以不影響原本的 a , 改成 ＆a or a[:]
        if i ==0 {
            a[1] = 12
            a[2] = 13
        }
        r[i] = v
    }
	fmt.Println("after a: ",a)
	fmt.Println("after r: ",r)
}
```

## [regex](https://github.com/google/re2/wiki/Syntax)
```go=
match , _ := regex.MatchString(`\d`, "12345")

```