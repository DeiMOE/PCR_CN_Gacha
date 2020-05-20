# PCR_CN_Gacha
>关于公主连结简体字版扭蛋模拟器，此git仓库只用于保存历史备档使用，大家可自行测试功能实现与改进     
>实际体验请移步[扭蛋模拟器](https://wiki.biligame.com/pcr/扭蛋模拟器)  

## 具体使用规范
>本页面使用了 Bootstrap3 ，JavaScript ,jQuery  
  
>推荐使用Chrome，New Edge等采用Chromium内核的浏览器 

## 如何增加蛋池类型
>修改```Gacha.js```内的UPtype数组，具体规则如下  
``` javascript
var UPtype=[
    [蛋池ID(int),蛋池文字说明(string),具体up的角色ID(int)],
    [1,"白金蛋池获取三★概率翻倍",0],
];
```
>修改```charx```数组以达到增加卡面
```javascript
 var char1=[ 
    [角色ID(int),角色昵称(string),角色头像地址(string)],
    [1,'佩可莉姆','https://patchwiki.biligame.com/images/pcr/6/67/rpznjh1epytf8mbp0t1dq91svg9dcti.png'],
```
>区分限定角色  
该功能将于国服上线限定角色后开放
## 如何使用
+ 本地使用
>克隆(拉取)仓库，打开``index.html``
+ wiki引用
>请确保wiki站支持Bootstrap3.4.7以上版本，将```index.html```内的```<style>```内容以{#CSS}方式引用，```<div class="row clearfix" id="content">```的内容作为WIKI主内容。利用ResourceLoader引用js文件。刷新缓存。