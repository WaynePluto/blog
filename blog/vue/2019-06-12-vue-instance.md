---
title: Vue-实例（代码结构）
date: 2019-06-12
author: liuwei
location: Zhengzhou
---

## Vue实例

### 创建实例

```js
let vm = new Vue({
  //设置实例选项
})
```

### 相关选项

```js
let vm = new Vue({
  el: '#id',  // 实例绑定的元素
  data:{
              // 使用数据对象，其中对象的属性可以绑定到视图上
  },     
  methods:{
              // 可以绑定到视图上的方法
  },
  //  生命周期钩子
})
```

### 生命周期钩子

在vue实例初始化的过程中会提供一些相关函数，这些函数在其生命周期内会自动调用，叫做生命周期钩子。  
生命周期钩子有：beforeCreate,created,beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed。  
具体可以查看[生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)


