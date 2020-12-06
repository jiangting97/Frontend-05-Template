### 浏览器工作原理
s
#### 渲染过程

url到bitmap的渲染过程
URL----> http
HTML ----->(parse)
DOM -----> CSS(computing)
DOM with CSS ----> layout
DOM with Position ----> render 
Bitmap


### 2 状态机

每一个状态都是一个机器
每一个机器里，我们可以做计算、存储、输出
每个机器知道下一个状态

### 实现HTTP 请求

#### 设计HTTP请求类

1. 构造函数处理
    * content type必要字段，需设置默认值
    * body事kv格式
    * 不同的content-type影响body格式

1.  编写send函数
    * 在request请求器中收集必要信息
    * 设计send函数，请求发送服务器
    * send函数异步

1.  reponse解析：(使用ResponseParse装配）ReponseParse分段处理ResponseText，使用状态机分析文件结构。
    * status line： (http版本号，状态码，状态文本）
    * header：与request相同
    * body：（chunk body）十六进制数字单独占一行，以十六进制0和kongchunk结尾
    * 
