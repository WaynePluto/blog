---
title: uni-app 安卓打包笔记
date: 2019-10-10
author: liuwei
location: Zhengzhou
---

### uni-app 安卓打包

#### 一、相关文件           

1. [Android studio](https://developer.android.com/studio)  
2. [Android 平台 HTML5+ SDK](http://ask.dcloud.net.cn/article/103)
    * 注意要根据所使用的HBuilderX版本选择对应的SDK版本

#### 二、资源替换

1. 在HBuilder X中右键点击项目管理器中需要打包的项目，->点击‘发行’->点击‘原生APP本地打包’->点击‘生成本地打包APP资源’，之后等待生成资源；

2. HBuider X的控制台会提醒编译状态，在生成之后会显示生成的资源路径。此时的项目根目录下会出现一个unpackage文件夹，其中的 /resources/\_UNI\_123xx456就是需要用来打包的资源（生成的文件名其实是你的DCloud appid，这个文件下有一个www文件）

3. 解压下载的HTML5+ SDK，使用Android studio打开（import）其中的HBuilder-Hello项目；

4. 在默认的Android 项目视图中显示了刚才打开的项目文件，点击展开assets->右键点击apps.HelloH5.www,点击show in Explorer，会发现这里文件目录是apps/HelloH5/www,将整个HelloH5文件删除，将第2步生成的资源\_UNI\_123xx456复制到apps目录下（这个文件名其实是你的DCloud appid，这个文件下有一个www文件）

5. 复制DCloud AppID；
   * 展开刚才复制后的www目录，manifest.json文件中的id值就是DCloud appid,格式大概是“\_UNI\_123xx456”,和之前生成的打包资源名是一样的,如果是空的，需要在HBuilder下打开项目根目录的manifest.json,在基础配置下可以看到有个重新获取按钮。

6. 在Android studio中打开assets/data/dcloud_control.xml,将里面的appid替换为上一步复制的DCloud appid;

7. 想好自己的安卓应用ID，类似com.example.myapp

8. Android studio根目录下打开app/manifests/AndroidManifest.xml,设置应用报名，将里面的
package="io.dcloud.HBuilder" 修改为自己的安卓应用ID,即package="com.example.myapp"；（注释掉provider标签的内容,防止不能真机提调试）

9. 在默认的Android 项目视图下，点击Gradle/build.gradle(Module:app),
修改 applicationId "io.dcloud.HBuilder" 为自己的安卓应用ID，
即  applicationId "com.example.myapp"；

10. 修改应用名称，点击app/res/values/strings.xml,在这里修改成自己的应用名称

11. 修改应用图标，默认视图，替换res/drawable/下的三个图片

12. 修改版本号，在默认的Android 项目视图下，点击Gradle/build.gradle(Module:app),

```conf
defaultConfig {
        applicationId "com.example.myapp"
        minSdkVersion 19
        targetSdkVersion 23
        versionCode 2
        versionName "1.0.2"
        multiDexEnabled true
        ndk {
            abiFilters 'x86','armeabi-v7a'
        }
    }
```

#### 四、打包过程

1. 点击Build->点击Generate Signed Bundle or APK, 选择APK，->next；
2. 设置签名文件，如果没有，点击Create New...（具体设置过程略）
3. 设置后点击next，选择debug版本或者release版本，勾选下面的V1,V2,点击Finish. 
4. 打包完成后apk包在app/debug或app/release中