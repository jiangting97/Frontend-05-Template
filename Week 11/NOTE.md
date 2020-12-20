
### 重学CSS


#### css at-rule 规则

- @charset ： [https://www.w3.org/TR/css-syntax-3/](https://www.w3.org/TR/css-syntax-3/)
- @import ：[https://www.w3.org/TR/css-cascade-4/](https://www.w3.org/TR/css-cascade-4/)
- @media ：[https://www.w3.org/TR/css3-conditional/](https://www.w3.org/TR/css3-conditional/)
- @page ： [https://www.w3.org/TR/css-page-3/](https://www.w3.org/TR/css-page-3/)
- @counter-style ：[https://www.w3.org/TR/css-counter-styles-3](https://www.w3.org/TR/css-counter-styles-3)
- @keyframes ：[https://www.w3.org/TR/css-animations-1/](https://www.w3.org/TR/css-animations-1/)
- @fontface ：[https://www.w3.org/TR/css-fonts-3/](https://www.w3.org/TR/css-fonts-3/)
- @supports ：[https://www.w3.org/TR/css3-conditional/](https://www.w3.org/TR/css3-conditional/)
- @namespace ：[https://www.w3.org/TR/css-namespaces-3/](https://www.w3.org/TR/css-namespaces-3/)

* 重要的三个特性：
@keyframes
@media
@fontface


#### CSS 规则

* 选择器
* 声明
    key
    value
* 普通规则
  * 选择器
  * 声明列表
    - 属性
    - 值
    - 值的类型
    - 函数


### 选择器

####  基本选择器
2. 元素选择器（Type selector）
3. 类选择器（Class selector）
4. ID 选择器（ID selector）
5. 属性选择器（Attribute selector）

#### 组合器（Combinators）
1. 后代组合器 
2. 直接子代组合器 >
3. 一般兄弟组合器 -
4. 紧邻兄弟组合器 +
5. 列组合器  ||

### 选择器优先级
优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：
如果存在内联样式，那么 A = 1, 否则 A = 0;
B 的值等于 ID选择器 出现的次数;
C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;
D 的值等于 标签选择器 和 伪元素 出现的总次数 。

div#a.b .c[id=x] 0 1 3 1 
#a:not(#b) 0 2 0 0 
*.a 0 0 1 0 
div.a 0 0 1 1
