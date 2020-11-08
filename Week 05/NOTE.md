## Proxy
1. const p = new Proxy(target, handler)
  handler 的对象方法：getPrototypeOf()、setPrototypeOf()、isExtensible()、preventExtensions()、getOwnPropertyDescriptor()defineProperty()、has()、get()、set()、deleteProperty()、ownKeys()、apply()、construct()

## DOM拖拽功能实现
1. 每个文本生成一个range，找出range中与移动div的最短距离，将移动的div插入
1. Range是一种fragment（HTML片断），它包含了节点或文本节点的一部分。 可以通过document.createRange()或selection象的getRangeAt()方法获得。reateRange()是在2级DOM里定义的一个方法，它属于document对象


