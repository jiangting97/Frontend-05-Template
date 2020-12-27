
### CSS排版

源代码：标签
语义：元素
表现：盒

HTML代码中可以书写开始标签，结束标签 ，和自封闭标签 。

一对起止标签 ，表示一个元素 。

DOM树中存储的是元素和其它类型的节点（Node）。

CSS选择器选中的是元素 。

CSS选择器选中的元素 ，在排版时可能产生多个盒 。

排版和渲染的基本单位是盒 。

### 盒模型


margin、padding content

属性：box-sizing: content-box\border-box;



### 正常流

正常流：

* 收集盒进行
* 计算盒在行中的排布
* 计算行的排布

![855448683382fbb36690db729b8ce7ff.png](evernotecid://D6110349-F532-4A4A-999B-0021D0140D85/appyinxiangcom/9084687/ENResource/p523)

#### 正常流行级排布

* baseline

![e54c3c2f43b5c4a2d4e559b3390760e9.png](evernotecid://D6110349-F532-4A4A-999B-0021D0140D85/appyinxiangcom/9084687/ENResource/p526)


![f301572f95cae81f9f1ab27336a75aba.png](evernotecid://D6110349-F532-4A4A-999B-0021D0140D85/appyinxiangcom/9084687/ENResource/p527)

inline-block是随着基线进行变化。

```
<div style="font-size: 50px; line-height: 100px; background-color: pink;">
  <div style="vertical-align: middle; overflow: visible; display: inline-block; width: 1px; height: 1px;">
    <div style="width: 1000px; height: 1px; background: red;"></div>
  </div>
  <span>Hello 中文</span>
  <div style="vertical-align: text-box; line-height: 70px; width: 100px; height: 150px; background-color: aqua; display: inline-block;">
    a<br/>b
  </div>
  <div style="vertical-align: text-bottom; line-height: 70px; width: 100px; height: 150px; background-color: aqua; display: inline-block;">
    a<br/>b
  </div>
  <div style="vertical-align: top; line-height: 70px; width: 100px; height: 100px; background-color: aqua; display: inline-block;">
  </div>
  <div style="vertical-align: base-line; line-height: 70px; width: 100px; height: 550px; background-color: rgb(255, 123, 0); display: inline-block;">1</div>
</div>  
```

#### 正常流块级排布

* float： 影响元素高度所占据范围
    两个float元素：float堆叠效果
    clear：right/left/both

* margin折叠：

    父子margin重叠其他条件：
    1. 父元素非块装格式化上下文元素
    2. 父元素没有border-top设置
    3. 父元素没有padding-top设置
    4. 父元素和第一个子元素之间没有inline元素分割
    margin-bottom重叠
    1. 父元素非块状格式上下文元素
    2. 父元素没有border-top设置
    3. 父元素没有padding-top设置
    4. 父元素和最后一个子元素之间没有inline元素分隔
    5. 父元素没有height、min-height、max-height限制
    取值
    1. 正正取大值
    2. 正负值相加
    3. 负负最负值

#### BFC合并
格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

Block Container 里面有BFC
（block、inline-block、table-cell、flex item、grid cell、table-caption）
Block-level Box：外面有BFC
display:(block/flex/table/grid)
display:(inline-block/inline-flex/inline-table/inline-grid)

Block Box = Block Container + Block-level Box 里外都有BFC的

##### 下列方式会创建块格式化上下文：
- float、
- absolutely elements、
- block containers、
- block box(overflow除了visible)

##### BFC 合并

block box && overflow：visible 
* BFC合并float
* BFC合并于margin折叠


#### flex布局

### 动画与绘制

#### 动画

* animation
   animation-name；@keyframes动画名称
   animation-duration：动画完成一个周期所花费的时间，默认0；
   animation-timing-function：动画的速度曲线（缓动效果）。默认是”ease“
   animation-delay：动画开始的延迟时间。默认是0；
   animation-iteration-count：动画播放次数等；
   animation-direction动画方向

* @keyframse
    值：百分比/from to

* transition:变化属性 持续时间 变化方式；可以在鼠标hover，等属性上触发；
   transition-property：变换的属性
   transition-duration：变换的时长
   transition-timing-function：时间曲线
   transition-delay：延迟

* transform：元素的样式变换；对元素进行旋转、缩放、移动或倾斜；
    transform-origin：x ，y；改变transform动作的基点（中心点）

```
ratate（角度值）：旋转
translate(x,y)：移动
scale（x，y）：缩放
skew（x,y)：扭曲
matrix（a，b，c，d，e，f）：矩阵
```

* 贝塞尔曲线


#### 颜色

* HSL
* HSV

#### 绘制

![4b08e93b193f0918cdbb935ebd0e4178.png](evernotecid://D6110349-F532-4A4A-999B-0021D0140D85/appyinxiangcom/9084687/ENResource/p529)








