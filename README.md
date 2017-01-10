# Javascript Dom 编程艺术（2）

- 数据类型：  字符串，数值，布尔值（true,false）,数组，对象（2种访问方式1.属性`property`2.方法`method`）

- #### 函数####

  - 如果需要多次使用同一段代码，可以把它封装成一个函数。

  ```javascript
  function shout () {
  	var beatles = Array("John","Paul","George","Ringo");
  	for(var count = 0; count<beatles.length; count++){
  			alert(beatles[count]); 
  	};
  }
  ```


  变量：用下划线分隔各个单词，

  函数：驼峰命名法

- #### 对象####

  - 属性和方法都是用“点”语法来访问：`object.property`   `object.method()`

- #### Dom

  - 五个常用Dom方法：`getElementById`  `getElementsByTagName`  `geElementsByClassName` `getAttribute` `setAttribute`

  - Dom其中三种：元素节点，文本节点，属性节点

  - Dom属性：

    - `childNodes` 可以获取任何一个元素的所有子元素，它是一个包含这个元素全部子元素的数组。

    - `nodeType`  每个节点都有nodeType属性，共有12个值。

    - `nodeValue`  用来得到和设置一个节点的值。

      ```js
      alert(id.childNodes[0].nodeValue);
      ```

    - `firstChile`和`lastChild`  代表childNodes数组的第一个和最后一个元素。

### 性能优化###

1. 尽量少访问DOM和尽量减少标记
2. 合并和放置脚本
3. 压缩脚本

