---
title: CSS——选择器清单
date: 2019-06-08
author: liuwei
location: Zhengzhou
---

## 选择器清单

### 1. 标签选择器 

### 2. 类选择器

### 3. id选择器

### 4. 属性选择器
    
* [attr]				有属性
* [attr="value"]		属性值为value
* [attr~="value"]		属性值空白隔开的值里有value
* [attr|="value"]		属性值以value开头或等于value
* [attr^="value"]		属性值以value开头
* [attr$="value"]		属性值以value结尾
* [attr*="value"]		属性值以value出现一次以上

### 5. 伪元素选择器
        
* ::before
* ::after
* ::first-line
* ::first-letter

### 6. 伪类别选择器

* :checked
* :empty
* :enabled
* :disabled
* :focus
* :not()
* :link			没有访问过的链接
* :active		    激活的链接（鼠标按下的时候）
* :visited		    访问过的链接
* :hover		    鼠标划过
* :first-child
* :last-child
* :nth-child(2)

### 7. 组合选择器

* AB
* A>B	A下一层的元素B
* A~B	A同父级的元素B
* A+B	A相邻的元素B
* A B	A包含的B

### 8. 用法示例

```css
/* 标签选择器 */
p {
    
}

/* 类选择器，hot是类名*/
.hot {
    
}
p.hot {
    
}

/* id选择器*/
#the4th{
    
}

/* 属性选择器*/
input[type]{
    
}
/* 伪元素选择器*/
li::before{
    
}
/* 伪类选择器*/
li:nth-child(2){
    
}
```

