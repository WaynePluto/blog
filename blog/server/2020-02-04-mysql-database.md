---
title: MySQL——数据库、表创建
date: 2020-02-04
author: liuwei
location: Zhengzhou
---

### 显示所有库
```sql
show databases;
```

### 创建新库
```sql
CREATE DATABASE test_base CHARSET utf8;
```

### 删除数据库
```sql
drop database test;
drop database if exists test;
```

### 选择数据库
```sql
use test_base;
```

### 数据库导出
```
sudo mysqldump -uroot -p sqlName > fileName.sql
```

### 两种数据库导入
```
mysql -uname -p abc < abc.sql
mysql>use my_base;
mysql>source /home/abc/abc.sql;
```

### 创建表
```sql
create table my_list (
	id int primary key auto_increment,
	list_name varchar(30) not null,
	description varchar(100) default null
) 
charset=utf8 
comment='test';
```

### 删除表
```sql
drop table if exists my_list;
```

### 查看表
```sql
desc my_list;