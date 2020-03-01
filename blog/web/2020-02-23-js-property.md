---
title: js对象属性特征与访问器
date: 2020-02-23
author: liuwei
location: Zhengzhou
---

### 属性特征与对象管理

管理对象的属性，比如希望属性不能被修改、删除、遍历等，更细致的控制

1. 查看属性特征（单个和全部）
2. 设置属性特征（单个和全部，还可以设置访问器）;
3. 禁止对象添加属性；
4. 封闭对象，禁止增加属性，禁止已有属性配置；
5. 冻结对象，禁止增加属性，禁止属性配置，禁止修改属性值；

```js
// 查看单个属性特征
let user = {
  'name': 'tom',
  'age': 18
}
console.log(Object.getOwnPropertyDescriptor(user, 'name'))
// {
//   "value": "tom",        属性值
//   "writable": true,      可修改
//   "enumerable": true,    可遍历
//   "configurable": true   可配置（可删除，可以设置属性特征）
// }

// 修改属性特征
let jerry = {}
Object.defineProperty(jerry, 'name', {
  value: 'js',
  writable: false,
  enumerable: false,
  configurable: false
})
console.log(Object.getOwnPropertyDescriptor(jerry, 'name'))

Object.defineProperties(user, {
  name: {
    value: 'Tom'
  },
  age: {
    value: 18
  }
})

// 禁止向对象里添加属性
Object.preventExtensions(jerry);
console.log(Object.isExtensible(jerry)); //false

// 封闭对象，禁止添加属性，禁止配置已有属性
Object.seal(jerry)//阻止添加新属性，并将所有现有属性标记为 configurable: false
Object.isSealed(jerry)

// 冻结对象，
Object.freeze(jerry)//冻结对象后不允许添加、删除、修改属性，writable、configurable都标记为false
Object.isFrozen(jerry)

```

### 访问器

1. 当希望在对象属性的读取与写入增加一些控制时可以使用访问器进行属性控制；  
2. 使用访问器时还可以将值存储在本地，读取也从本地获取；  
3. 构造函数中使用属性特征定义方法将属性定义为访问器；  
4. 在类class中定义访问器；

```js
// 对象中直接使用访问器
let user = {
  data: {
    name: ''
  },
  set name(value) {
    console.log('在赋值时可以在访问器中对value进行操作', value)
    this.data.name = value
  },
  get name() {
    console.log('这里是访问器获取值,可以返回计算属性')
    return this.data.name
  }
}
user.name = 'Tom'
console.log(user.name)

// 通过属性特征定义访问器，
// 这种方式可以用在构造函数中
function Book(name, page) {
  let data = {
    name
  }
  Object.defineProperties(this, {
    name: {
      set(value) {
        data.name = value
      },
      get() {
        return data.name
      }
    }
  })
}
let book1 = new Book('数学', 100)
book1.name = 'shuxue'
console.log(book1, book1.name)

// 在class中定义访问器
const DATA = Symbol()
class Phone {
  constructor(label) {
    this[DATA] = {
      label
    }
  }
  set label(value) {
    this[DATA].label = value
  }
  get label() {
    return this[DATA].label
  }
}

let xiaomi = new Phone('小米')
xiaomi.label = '小米10'
console.log(xiaomi, xiaomi.label)
```