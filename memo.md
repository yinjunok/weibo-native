# 备忘录

## 安卓 5.0 左右的版本需要修改默认生成的设置才能安装 debug 版本.
参考链接: 
http://bbs.reactnative.cn/topic/130/%E6%96%B0%E6%89%8B%E6%8F%90%E9%97%AE%E5%89%8D%E5%85%88%E6%9D%A5%E8%BF%99%E9%87%8C%E7%9C%8B%E7%9C%8B-react-native%E7%9A%84%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98
https://www.jianshu.com/p/c1aac2d660c4

## 添加字体
https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4

## borderShadow 在安卓上不生效
https://github.com/facebook/react-native/pull/4180 可以用 elevation 替代

## 让 float button 悬浮在 ScrollView 上
https://reactnativecode.com/show-floating-action-button-above-listview/

## 背景图组件 ImageBackground 文档里没有提到

## Text 边距的问题

```jsx
<View style={{ padding: 15 }}>
  <Text>
    多行文字多行文
    字多行文字
  </Text>
</View>
```

对拥有多行的 Text 组件, 使用 padding, margin 不管是在 Text 组件上, 还是在包裹它的 View 组件上使用, 
会出现还有空余容纳文字的情况下, 文字折行.

## RN 动画
http://tw93.com/2016-06-05/thinking-about-react-native-animated.html  
https://stackoverflow.com/questions/37445090/react-native-how-do-you-animate-the-rotation-of-an-image  
https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae

## 载入动画组件  
https://github.com/ybq/Android-SpinKit  
https://github.com/maxs15/react-native-spinkit
