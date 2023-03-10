# Ar-Sr-Na Java Serverless Learn项目-基础
节目编号：[08-1202/08-1203]B：Ar-Sr-Na Java Serverless Learn项目-基础

!> 2021-2-26 该文档将停止更新，方向改为JavaScriptServerlessLearn，简称jsLearn，注意js与java为老婆与老婆饼的关系！新项目地址：[https://www.arlearn.ltd](https://www.arlearn.ltd)

## 教程介绍

Ar-Sr-Na，科普自媒体，业余无线电爱好者，擅长解决渲染IaaS问题

本教程面向Serverless开发，不针对本地开发，意味着需要有较好Java基础，英语基础，熟悉逻辑关系，了解Serverless架构。

## 教程初衷

在这个云计算盛行也是趋势的时代，本地函数带来的成本问题不占少数，尤其是当应用上线时，大量请求压榨服务器导致宕机，采购高性能服务器成本太高，所以Serverless出现了，效率更高，成本更低，扩展性，计算资源等层面具有众多优势，所以，它不香么？

创业路上并不是一帆风顺，我们也希望能帮助大家实现梦想，努力总比站在原地更接近成功！

# Serverless介绍

Serverless Computing，一种全新的函数架构，意味着无服务器，节省资源，也降低了成本。Serverless被称为FaaS（Function-as-a-Service），以平台即服务（PaaS）为基础，意味着需要一个平台来支撑函数服务。

本站建议使用腾讯云Serverless云函数服务[https://console.cloud.tencent.com/scf/](https://console.cloud.tencent.com/scf/)

# Java语言简介

java是计算机编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。

Java功能强大，扩展性高，虽说在Java领域，专业的东西很多，未必一下子能理解完，

## 应用

无论是张浩扬的QQ程序，up主的数据可视化，都以java为后端程序，当然[bilibili数据可视化](https://github.com/ArSrNa/bilibiliData-TCV)这个是PHP的

### 项目在不断完善中，希望大家多多支持：QQ群：1097347557 <!-- {docsify-ignore-all} -->

# 准备

## 云端准备

腾讯云账户

腾讯云秘钥ID与Key（必须放行组件的权限）

## 本地机的准备

NPM：[npm | get npm (npmjs.com) ](https://www.npmjs.com/get-npm)（这里就不放出教程了）

Serverless CLI：npm install -g serverless

教程：[下载安装 (serverless.com)](https://www.serverless.com/cn/framework/docs/quickstart/installation)

# 开始第一个无服务器程序

## 云端配置函数

打开腾讯云的[云函数控制台](https://console.cloud.tencent.com/scf/)

![](https://res.arsrna.cn/javalearn/articlepic/basiclearn/gg4ureyez9.png)
点击函数服务

![](https://res.arsrna.cn/javalearn/articlepic/basiclearn/93gzdy3koa.png)
新建一个函数

![](https://res.arsrna.cn/javalearn/articlepic/basiclearn/wi8vcnc8es.png)
输入名称，语言选择Java，点击下一步

![](https://res.arsrna.cn/javalearn/articlepic/basiclearn/f3xxq8ogro.png)
![](https://res.arsrna.cn/javalearn/articlepic/basiclearn/agmh0ztnjg.png)
要注意此处的执行方法，它定义了调用云函数时需要从哪个文件中的哪个函数开始执行。

如上图是example.Hello::mainHandler

所以函数就得这么设置，从mainHandler开始执行：

```java
public String mainHandler(KeyValueClass kv)
    {
       return String.format("Hello World");
    }
```

创建完成后，需要上传函数

![](https://res.arsrna.cn/yyy8ijr3a8.png)
需要把源代码改为index.java，然后打包为zip上传，就完成了

## 本地配置函数

如果想要本地调试再部署到云端更方便些，可以使用Serverless.yml和.env文件

它类似这样：

```yaml
component: website
name: website
org: test # (可选) 用于记录组织信息，默认值为您的腾讯云账户 APPID
app: JavaLearn # (可选) 该 website 应用名称
stage: dev # (可选) 用于区分环境信息，默认值是 dev
```

他声明了用到的组件，需要的云产品，以及环境，各种方便辨认的信息

| 名称 | 必要性 | 释义 |
|:----|:----|:----|
| component | √ | 引用组件名称 |
| name | √ | 组件实例名称 |
| org | 可选 | 组织信息（默认是你腾讯云APPID） |
| app | 可选 | 改xxx组件的应用名称 |
| stage | 可选 | 开发环境，用于区分 |


例如我要创建一个网站组件，需要一个产品来存储我的网站资源，毕竟这是Serverless，不可能引用Server服务器组件，所以能存储网站并且部署网站的只有云开发和COS，云开发的能力过于广泛，集成了各种生态资源，所以建议使用COS对象存储的静态网站托管

此时只需要在yml中加上：

```yaml
inputs:
  bucket: my-bucket
  region: ap-guangzhou

```

其中：

| 名称 | 释义 |
|:----|:----|
| bucket | 存储桶的名称 |
| region | 存储桶地域 |


最终输出地址就为bucket-appID.cos-website.region.myqcloud.com（部署后生效）

在该目录下打开命令行，输入serverless deploy，登录后即可部署完成

如果还需要部署其它的配置，例如https等，可以参照以下实例

```yaml
inputs:
  src:
    src: ./
    index: index.html
    # dist: ./dist
    # hook: npm run build
    # websitePath: ./
  region: ap-hongkong
  bucketName: javalearn
  protocol: http
```
定义上传的子目录：src
定义主页：index
访问协议：protocol

如果不想每次登录，可以新建.env文件，输入你的腾讯云秘钥

```yaml
TENCENT_SECRET_ID=xxxxxxxxxx
TENCENT_SECRET_KEY=xxxxxxx
```

**注：腾讯云对的秘钥有关账户和资产安全，不要轻易透露，Deploy的时候会自动忽略.env文件不上传，但是github不一样！切记请不要透露个人的ID和KEY**

## 部署函数

在有Serverless.yml的目录下打开命令行

键入**serverless deploy**或**sls deploy**（注，Powershell中不能使用sls）

访问输出的地址，就部署完毕了

# 更新日志

## 文档更新

2020-5-3 项目开始

2020-5-4 Ar-Sr-Na 加入计划

2020-6-10 java.arsrna.cn建成

2020-6-18 文章发布

2021-1-1 ServerlessSSL生效

2021-2-1 文章更新

2021-2-2 内容优化，结构更新，新增章节：准备；开始第一个无服务器程序

2021-2-4 更新章节：Java基础；Hello World；编写规范

2021-2-5 适配了Serverless的HelloWorld