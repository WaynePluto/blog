---
title: MySQL——条件判断
date: 2020-02-05
author: liuwei
location: Zhengzhou
---

>一些常用的条件判断

1. 大于，等于

```sql
select *
from stu
where id > 1;

select *
from stu
where id = 1;
```

2. 多条件判断

```sql
select *
from stu
where id > 1 
and class_id  = 3;
```

3. 包含某字符串

```sql
select *
from stu
where sname like "%李%";
```

4. 区间内判断

```sql
select *
from stu
where id between 2 and 5;
```

5. 集合内判断

```sql
select *
from stu
where id in (1, 3, 5);
```

5. 否定

```sql
select *
from stu
where id not in (1, 3, 5);
```

6. null判断

```sql
select *
from stu
where class_id is null;
```
