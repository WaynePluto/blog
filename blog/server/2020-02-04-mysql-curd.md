---
title: MySQL——极简增删改查
date: 2020-02-04
author: liuwei
location: Zhengzhou
---

1. 插入
- 插入语句关键字 **insert into**
- 插入一条数据时使用  **set**
- 插入多条数据时使用 **value**（也可以用来插入一条数据）
```sql
insert into my_list set
name = 'mysql', description = '数据库';

insert into my_list (name, description)
values ('java', 'spring'), ('CSS', '层叠样式');
```

2. 删除
- 删除语句关键字 **delete from**
- 条件判断关键字 **where**
```sql
delete
from my_list
where id >= 6;
```

3. 修改
- 修改语句关键字 **update**，**set**
```sql
update my_list
set
name = 'Java'
where id = 12;
```

4. 单表查询
- 查询语句关键字 **select**
- 查询所有列内容用 *
- 查询部分列则直接写列名
```sql
select *
from my_list;

select name, description
from my_list;
```