---
title: MySQL——多表查询
date: 2020-02-05
author: liuwei
location: Zhengzhou
---

1. 多表关系

    数据表之间有三种关系分别是 一对一，一对多，多对多。
- 一对一 比如学生与学生详细信息，学生信息表是学生表的扩展，作为扩展，学生信息表内会有一列记录对应的学生id；
- 一对多 比如班级与学生，一条班级数据会对应多条学生数据，这时在学生表里有一列记录对应的班级id；
- 多对多 比如学生与老师，一个学生有多个老师，一个老师有多个学生，这时增加一个中间表，表里记录学生id与老师id。

2. 内连接

- 将两个（或多个）表连接成一张表，连接关键字 **join**
- 内连接关键字 **inner**
- 关联条件 **on**， 没有条件时会返回两张表的所有组合

```sql
select s.sname , c.cname
from stu s
inner join class c on
s.class_id = c.id;
```

3. 外连接

    在连接两个表时，比如表1与表2，表2记录表1的id，如果表2的某些数据没有记录表1的id，这时采用内连接就查不到这些数据了，如果还想看这些数据就要用到外连接。
- 外连接关键字 **left**, **right**
- left表示显示左边的全部表数据
- right表示显示右边的全部表数据

```sql
select *
from stu s
left join stu_info si on
si.stu_id = s.id;

select *
from stu_info si
right join stu s on
si.stu_id = s.id;
```

4. 自连接

    有时候在查询一个表时会比较麻烦，比如在一个学生表里查询某同学的同班同学，这时把学生表和自身连接起来当作两个表就会容易操作了。
    
```sql
select s.sname, s_c.sname, s.class_id
from stu s
inner join stu s_c on
s.class_id = s_c.class_id
where s.id = 9
and s_c.id != 9;
```