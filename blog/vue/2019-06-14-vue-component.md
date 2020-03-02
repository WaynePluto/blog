---
title: Vue-组件
date: 2019-06-14
author: liuwei
location: Zhengzhou
---

### 创建组件

1. 使用Vue.extend

```html
<div id="com1">
<my-com1></my-com1>
</div>
```
```js
let com1 = Vue.extend({
    template: '<h1>Vue组件构建方式一</h1>'
});
Vue.component('my-com1', com1);

new Vue({
  el:'#com1'  // 用来控制id为com1的元素
})
```

2. Vue.component

```js
Vue.component('my-com1', {
  template: '<h1>Vue组件构建方式一</h1>'
});
```

3. 使用template元素
```html
<template id="temp">
  <div>
    <h2>使用template创建组件</h2>
  </div>
</template>
<script>
  Vue.component('my-com1', {
    template: '#temp'
  });
</script>
```

4. 局部注册组件:  
在vue实例选项中设置components属性，传入组件
```js
//模板对象
let login = {
    template: "#temp-test"
}

let vm = new Vue({
    el: ".app",
    data: {
      msg: "abc"
    },
    components: {
      //组件名：模板对象
      "login": login
    }
})
```

### 组件切换

第一种切换方式：使用v-if和v-else
这样做切换时在切换的组件数目多时会不方便
第二种切换方式使用动态组件，component元素：
```html
<component :is="componentId"></component>
```
使用component标签（vue提供的元素）component是一个占位符,其中componentId是指定要展示的组件的名称变量，如果要直接使用组件名称需要加上单引号，用变量则在data中定义。

### 组件传值

1. 父组件向子组件传值，在子组件定义时加上props属性：
```js
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```
这样在调用组件时就可以对自定义的属性进行传值了
```html
<blog-post title="My journey with Vue"></blog-post>
```
注意：props是只读的，在父组件传递后就不会改变了。


2. 子组件传值给父组件
就是父组件监听子组件的自定义事件，监听回调是父组件定义的方法

子组件自定义事件，
```js
methonds:{
  myfunc(){
  this.$emit("func");//这里就是发射事件func
  }
}
```
父组件将自己的方法传给子组件的事件func,子组件想要调用时就调用自己的myfunc;
```html
<com v-on:func="show"></com>
```
其中func是子组件定义的方法名，show是父组件定义的，子组件里记得不要写成show(),不然会直接执行一次。  
子组件在发射事件时也可以带上参数，这样父组件的监听方法就会收到传递的参数。








