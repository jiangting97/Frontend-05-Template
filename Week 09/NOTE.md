
### HTML解析


1. 拆分文件

1. 使用FSM实现HTML分析

1. 三种标签的区分:开始标签、结束标签、自封闭标签

1. 处理属性(单引号、双引号、无引号三种方法、属性处理结束加到token上）

#### HTML 标准状态机器
Tokenization:在HTML标准中，已经规定HTML的状态([https://html.spec.whatwg.org/multipage/](https://html.spec.whatwg.org/multipage/))
