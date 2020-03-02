---
title: Vue-常用指令
date: 2019-06-12
author: liuwei
location: Zhengzhou
---

## Vue指令基础笔记

### 1. 插值表达式
```html
<!--  将来new的Vue实例控制这个元素内容 -->
<div id="app">
    {{ msg }}
</div>
```

```js
let vmData = { //存放el元素需要用到的数据
         msg:'Hello,Vue!'   
    }
let vm = new Vue({
    el:'#app',//表示控制的实例
    data:vmData
})
```

### 2. v-cloak
用来处理闪烁问题

```html
<div class="testvue">
    <p v-cloak>{{ message }}</p>
</div>
```

```css
/* 使用属性选择器设置隐藏 */
[v-cloak] {
    display: none;
}
```

### 3. v-text 
这种方式不会有闪烁问题

```html
<p v-text="message"></p>
```
区别：
v-test会把标签内的内容替换掉，而差值表达式仅仅替换表达式，不影响表达式前后的内容

### 4. v-html
可以用来输出HTML内容，会替换标签内的内容

### 5. v-bind

用来绑定属性的指令，例如

```html
<!-- title属性内容会显示message而不是vue定义的message内容 -->
<p v-text="message" title="message"></p>
<!-- 如果想用vue定义的内容需要使用v-bind -->
<p v-text="message" v-bind:title="message"></p>
```
v-bind会把后面引号内的内容当做js解析，如果想要增加内容，可以使用：
"message + 'some text' ".
一种简写方式：只使用英文冒号“:”，省略v-bind

### 6. v-on 指令

用来绑定事件的指令  
用法示例：

```html
<input type="button" value="按钮" v-on:click="show">
```

```js
let app = new Vue({
    el: '.testvue',
    data: {
        message: 'hello,Vue!'
    },
    methods: {
        show: () => {
            alert("hello");
        }
    },

})
```

绑定的事件需要在methods中定义
常用事件都可以定义，click，mouseover等等

### 7. v-model

用来实现双向绑定。v-bind只能实现数据的单向绑定，从model自动绑定到view，无法实现数据的双向绑定。v-model 可以实现表单数据的双向绑定。

```html
<input type="text" v-model="message">
```

* 注意 只能运用在表单元素中
input(radio,text,address,email...) select  checkbox  textarea

### 8. v-for

基本用法
其中items是源数据，item是遍历的迭代器，index是索引，
即v-for="(键值,键名,索引) in 数组"

```html
<div class="testvue">
    <ul>
        <li v-for="(item, index) in items">
             {{index}},{{item}}
        </li>
    </ul>
</div>
```
```js
let app = new Vue({
    el: '.testvue',
    data: {
        message: 'hello,Vue!',
        flag: true,
        items: [1, 2, 3, 4, 5, 6]
    },
}
```
除了使用数组，还可以遍历对象数组以及对象,还可以迭代数字v-for = "count in 10" , 其中count从1开始, 当有组件时需要指定key进行组件的指定

### 9. v-if,v-show
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。  
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。  
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。  
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if较好。



