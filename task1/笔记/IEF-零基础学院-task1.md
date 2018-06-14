# IEF-零基础学院-task1
@(IEF笔记)[前端,IEF,项目]

---
 **1.对css样式进行重置后,怎么还原`ul`标签的列表样式?**

 
    .chapter ul {
        list-style-type: disc;/* 实心圆样式,对于非nav下的列表可省略 */
        padding: 1em;/* 必须设置padding,否则标志没有地方显示 */
        margin-left: 1em;/* 设置缩进,为了美观 */
    }
    
`reset.css`里对所有的标签都预设了`padding` `margin`为0,同时只针对`nav ul`抹除了列表样式.所以要还原列表样式,重新设置合适的边距就可以了.针对`nav ul`还要重设样式.
附:列表样式属性大全
![Alt text](./1528707607519.png)
[文档-w3schoolCSS list-style-type 属性](http://www.w3school.com.cn/cssref/pr_list-style-type.asp)
     