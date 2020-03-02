---
title: Vue-路由
date: 2019-06-17
author: liuwei
location: Zhengzhou
---

### 设置路由
在引入vue.js后需要引入vue-router.js
```js
let login = { //组件模板对象
  templete:"#login"
}
let routerObj = new VueRouter({
  //配置对象中的route表示路由匹配规则
  routes:[
  //每个路由规则都是一个对象
  //属性1是路由链接地址，属性2是相应的组件
  //即
  { path : '/login', component: login}
  //注意component的属性值必须是一个组件模板对象
  ]
})
```

然后将路由规则对象注册到vm实例上，（通过router属性进行注册）用来监听url地址,根据地址变化展示不同组件
```js
let vm = new Vue({
  el:"",
  data:"",
  methods:{},
  router: routerObj,
})
```
此时页面不会展示出来，因为没有设置容器
需要在vm控制的元素中加上
```html
<router-view></router-view>
```
这个元素是vue-router提供的元素标签，用来做占位符
1.使用a链接
```html
<a href="#/login"></a>
```
这里的a标签用来引导路由切换，其中的href属性值要带上#，而不是真实地址
2.使用router-link标签
```html
<router-link to="/login"></router-link>
```
会默认渲染为a标签
to属性设置链接地址
tag属性设置渲染的标签，例如设置tag="span"会渲染为span标签

在默认进来时会显示根路径，希望默认进来会有一个路径
在设置路由匹配规则时可以给根路径进行重定向
```js
{path:'/',redirect:'/login'}
```
设置路由高亮
设置css类
```css
.router-link-active{

}
```
这个类就是路由当前路径vue-router提供的类
还可以在路由构造时设置自己的激活类（参考官网API）

### 路由传参
第一种方式：
传递时：
```html
<router-link to="/login?id=0"></router-link>
```
在显示的组件中可以通过
this.$route获取组件的路由信息，其中
this.$route.query就包含了传递的参数对象

第二种方式：
改造路由，设置占位符
```js
{path:'/login/:id',component:login}
```
这样在传递时设置
```html
<router-link to="/login/10"></router-link>
```
输出一下this.$route,可以发现现在的id 10在params对象中this.$route.params.id获取值

### 路由嵌套

使用children属性设置子路由嵌套
```js
routes:[
  {
    path:"/account",
    component:account,
    children:[
      {
      path:'login',     //这里子路由不要加斜线/
      component:login
      }
    ]
  }
]
```

### 命名视图
需要三个组件分别是头部，左侧，右侧主体区，
在设置路由时一个路径可以设置多个组件
```js
{
  path:'/',
  components:{
    'default':header,//组件名称：组件对象
    'left':leftBox,
    'main':mainBox
  }
}
```
在使用时可以给路由容器设置要放置的组件名称
例如： 
```html
<router-view name="mian"> </router-view>
```
这就是命名视图