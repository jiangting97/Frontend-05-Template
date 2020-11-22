## 重学Js

#### 运算符和表达式

#### 类型转换


### 语句

#### 运行时相关概念

#### 简单语句和复合语句

#### 声明
var、let、const、class 函数声明（普通函数声明、async函数声明、generator函数声明、async generator函数声明）


### JS结构化 

#### 宏任务和微任务

1. 宏任务：消息队列中等待被主线程执行事件
2. 微任务：一个需要异步执行的函数，执行时机是在当前宏任务执行结束之后，下一个宏任务执行之前。
    微任务技术
    * Promise
    * process.nextTick
    * MutationObserver
    * Object.observe

3. 产生微任务时机
    * 调用Promise.resolv()、Promise.reject()
    * 使用MutationObserve监控DOM节点，当DOM节点发生变化时，产生DOM变化的微任务记录

#### JS函数调用

1. 执行上下文：执行上下文栈（保存函数执行信息）
    code evaluation state
    Function
    Script or Module
    Generator(Generator函数创建)
    Realm(内置对象的领域)：不同Ream完全独立
    LexicalEnvironment（this、new.target、super、变量）
    VariableEnvironment（仅仅用于var声明）
2. 闭包（包括Environment Record、Code）
