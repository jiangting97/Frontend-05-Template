## 重学JS

### 产生式

1. 什么是产生式：是一种用形式化符号精准描述程序设计语言的语法的一种形式系统，文法是上下文无关文法。

产生式有很多种，主要了解一下BNF产生式

#### 巴克斯-诺尔（BNF）

##### 特点

1. 用尖括号括起来的名称来表示语法结构名
2. 语法结构分为基础结构和需要其他语法结构定义的复合结构
    * 基础结构：终结符
    * 复合结构：非终结符
1. 引号和中间的字符表示终结符
2. 可以有括号
3. \* 表示重复多次
4. | 表示或
5. \+ 表示至少一次
6. 递归性

##### 基本语法
 基本语法：<符号>::=<使用符号的表达式>
< >     : 内包含的为必选项。
[ ]     : 内包含的为可选项。
{ }     : 内包含的为可重复0至无数次的项。
|       : 表示在其左右两边任选一项，相当于"OR"的意思。
::=     : 是“被定义为”的意思
"..."   : 术语符号
[...]   : 选项，最多出现一次
{...}   : 重复项，任意次数，包括 0 次
(...)   : 分组
|       : 并列选项，只能选一个

##### 四则运算
乘法：<MultiplicativeExpression> ::= <Number> | <MultiplicativeExpression> "* " <Number> | <MultiplicativeExpression> "/" <Number>

加法：<AdditiveExpression> ::= <MultiplicativeExpression> | <AdditiveExpression> "+" <MultiplicativeExpression> | <AdditiveExpression> "-" <MultiplicativeExpression>

四则运算：<PrimaryExpression> ::= <AdditiveExpression> ｜"("<PrimaryExpression>")" "+"<AdditiveExpression> | "("<PrimaryExpression>")" "-" <AdditiveExpression>")" | "("<PrimaryExpression>")" "\*" <AdditiveExpression> | "("<PrimaryExpression>")" "/" <AdditiveExpression> 

#### 乔姆斯基体系

0-型文法 无限制文法
1-型文法 上下文相关文法
2-型文法 上下文无关文法
3-型文法 正则文法

### Number

### String

### 对象（Object、Symbol）
