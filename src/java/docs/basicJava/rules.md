# 编写规范

## 注释

单行注释： //注释内容 【使用双斜杠】

多行注释：/\* 内容内容（可以跨行）xxxx，我永远喜欢御坂美琴  \*/

## 变量与常量

常量：一个定值，永远不变的数据

变量：会改变的数据，或者会被代替的数据

Java中和数学的量不是同一个类型

变量原理：将这个量写入内存，程序直接从内存调用变量

![](https://res.arsrna.cn/javalearn/articlepic/basicJava/w35fl22jlf.png)

1. `在同一对花括号中，变量名不能重复。`
2. `变量在使用之前，必须初始化（赋值）。`
3. `定义long类型的变量时，需要在整数的后面加L（大小写均可，建议大写）。因为整数默认是int类型，整数太大可能超出int范围。`
4. `定义float类型的变量时，需要在小数的后面加F（大小写均可，建议大写）。因为浮点数的默认类型是double， double的取值范围是大于float的，类型不兼容。`

# 数据

Java是一个强类型语言，Java中的数据必须明确数据类型。在Java中的数据类型包括基本数据类型和引用数据类型两种。

Java中的基本数据类型：

<table>
  <tr>
    <th class="align-left">数据类型</th>
    <th class="align-left">表示</th>
    <th class="align-left">单位内存占用</th>
    <th class="align-left">区间</th>
  </tr>
  <tr>
    <td rowspan="4">整数</td>
    <td>byte</td>
    <td>1</td>
    <td>x∈[-2^7,2^7)  即-128,127且x∈N</td>
  </tr>
  <tr>
    <td>short</td>
    <td>2</td>
    <td>x∈[-2^15,2^15) 即-32768,32767且x∈N</td>
  </tr>
  <tr>
    <td>int</td>
    <td>4</td>
    <td>x∈[-2^31,2^31) 且x∈N</td>
  </tr>
  <tr>
    <td>long</td>
    <td>8</td>
    <td>x∈[-2^63,2^63) 且x∈N</td>
  </tr>
  <tr>
    <td rowspan="2">浮点数</td>
    <td>float</td>
    <td>4</td>
    <td>x∈1.401298e-45,3.402823e+38 且x∈R</td>
  </tr>
  <tr>
    <td>double</td>
    <td>8</td>
    <td>x∈4.9000000e-324,1.797693e+308 且x∈R</td>
  </tr>
  <tr>
    <td>字符</td>
    <td>char</td>
    <td>2</td>
    <td>x∈0,65535 且x∈R</td>
  </tr>
  <tr>
    <td>布尔</td>
    <td>boolean</td>
    <td>1</td>
    <td>x∈{true,false}</td>
  </tr>
  <tr>
    <td colspan="4">注：区间栏符号： ∈ - 属于；N - 整数集合；R - 实数集合；e - 自然对数；e+n - 10的n次幂,n∈R</td>
  </tr>
</table>


# 未完待续！2021-2-4