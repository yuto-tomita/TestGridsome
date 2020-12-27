---
title: 【Golangメモ】変数宣言と変数の型の確認
description: Golangアウトプット
date: 2020-12-26
tags: go
path: /article/6
---
## Golangの変数宣言

型の宣言方法

`var`を使用して宣言する。そのあとに型の宣言も行う

連続して変数宣言もできる

`fmt.Printf`を使用して変数の型を調べることができる
変数宣言は関数の中身のみ省略記法があり`:=`でも宣言ができる

`:=`を使用すると暗黙的に型宣言が行われる

```go
package main

import "fmt"

func main() {
  var i int = 0 
  var x y int = 0, 0
  k := 8

  fmt.Printf("%T\n", i) // int
}

```

変数に何も初期値をいれないとぜろ値が与えられる

```go

package main

import "fmt"

func main() {
  var i int
  var f float64
  var b bool
  var s string
  fmt.Printf("%v %v %v %q\n", i, f, b, s) // 0 0 false ""
}

```