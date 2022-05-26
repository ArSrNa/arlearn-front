# 从Hello World到入坟

## 本地调试

打开编写程序

输入

```
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

!> 注：Java对大小写比你女朋友还敏感！

![](https://res.arsrna.cn/javalearn/articlepic/basicJava/s449w72i4d.png)

运行-启动调试

你会发现报错了，因为还没编译Class

![](https://res.arsrna.cn/javalearn/articlepic/basicJava/mqucd9z12d.png)

在java的目录下运行命令行，输入

```
javac 文件名
```

注意，类名也就是Class要改成你的文件名

例如我上面的文件

```
public class helloWorldjava 
```

然后执行命令

```
java 类名
```

![](https://res.arsrna.cn/javalearn/articlepic/basicJava/f0mbc641ig.png)

就这样输出成功了

整个流程如下：

![](https://res.arsrna.cn/javalearn/articlepic/basicJava/73c7v60xi1.png)

`怎么样，是不是很复杂？没事，我们尽量少使用Re:从0行开编的阳间代码，而是使用框架和API，这也是Ar-Sr-Na分支的主要内容，对Java不过度描述，重点讲框架应用与无服务器云端应用`

# 云函数HelloWorld

云端和本地的区别就是多了一个函数入口：main\_handler

她声明了在云端执行命令的入口

同时，System.out.printIn将无法正常输出，只能输出到日志控制台

同样PHP的echo，print也无法在用户界面输出

打印信息变成了**return();**

## 部署

首先新建一个函数

（具体步骤参考 [开始第一个无服务器程序](https://java.arsrna.cn/docs/#/?id%25E5%25BC%2580%25E5%25A7%258B%25E7%25AC%25AC%25E4%25B8%2580%25E4%25B8%25AA%25E6%2597%25A0%25E6%259C%258D%25E5%258A%25A1%25E5%2599%25A8%25E7%25A8%258B%25E5%25BA%258F&id=%e5%bc%80%e5%a7%8b%e7%ac%ac%e4%b8%80%e4%b8%aa%e6%97%a0%e6%9c%8d%e5%8a%a1%e5%99%a8%e7%a8%8b%e5%ba%8f))

在函数代码处把yaml下载下来

内容类似这样：

```yaml
app: javalearntest
component: scf
inputs:
  cls:
    logsetId: 590cbd35-xxxxxxxxx
    topicId: 3febe78f-xxxxxxxxxxxxxxxxxxxxxxxxx
  description: helloworld 空白模板函数
  eip: false
  enableRoleAuth: true
  events: []
  handler: example.Hello::mainHandle
  memorySize: 128
  name: javalearntest
  namespace: default
  publicAccess: true
  region: ap-guangzhou
  runtime: Java8
  src: ./src
  timeout: 3
name: ap-guangzhou_default_javalearntest
org: 'xxxxxxxx'
stage: dev
# When using this configuration file for deployment, make sure the file name is "serverless.yml".
# For more information: https://github.com/serverless-components/tencent-scf/blob/master/docs/configure.md
```

| 关键参数 | 释义 |
|:----|:----|
| app | 应用名称 |
| inputs:cls | 引用云函数组件 |
| description | 描述 |
| eip | EIP弹性网卡 |
| handler | 函数入口（默认main\_handler） |
| memorySize | 函数内存大小 |
| src | 资源路径 |
| runtime | 开发环境（语言） |
| org | 开发组织，默认是你的appID |
| stage | 环境（上线，测试，开发） |


如果直接打印一个HelloWorld呢？

当然不行

!> Serverless不包括编译能力，需要入口，你女朋友都有入口，云函数怎么没有呢？

必须要在本地编译class后同时把class和代码上传到云函数

这是Java8开发说明：[云函数 Java 说明 - 开发指南 -腾讯云文档](https://cloud.tencent.com/document/product/583/12214)

官方文档里面的HelloWorld如下：

```java
package example;

public class Hello {
    public String mainHandler(KeyValueClass kv) {
        System.out.println("Hello world!");
        System.out.println(String.format("key1 = %s", kv.getKey1()));
        System.out.println(String.format("key2 = %s", kv.getKey2()));
        return String.format("Hello World");
    }
}
```

具体参考文档

（该文更新日期：2021-2-5 V2）