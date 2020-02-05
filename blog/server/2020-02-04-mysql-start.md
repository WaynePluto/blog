---
title: MySQL——环境配置
date: 2020-02-04
author: liuwei
location: Zhengzhou
---

### 安装
```
sudo apt-get update
sudo apt-get install mysql-server
```

### 启动、停止、重启、配置
```
sudo service mysql start
sudo /etc/inint.d/mysql start
sudo service mysql stop
sudo /etc/inint.d/mysql stop
sudo service mysql restart
sudo /etc/inint.d/mysql restart
sudo service mysql status
sudo mysql_secure_installation
```

### 登录
```
sudo mysql -u root -p
```

### 创建库
```sql
create database test;
```

### 设置其他用户
```sql
grant all privileges on my_base.* to user_name@localhost  identified by "pass";
grant all privileges on *.* to user_name@"%" identified by "pass";
```

