# DrTire-一款基于Vue的UI框架
[![Build Status](https://travis-ci.org/c2kaka/DrTire.svg?branch=test-case)](https://travis-ci.org/c2kaka/DrTire)

## 介绍
这是我在Vue学习过程中制作的一个UI框架，希望对你有用。

## 开始使用
1.添加CSS样式
使用本框架前，请在CSS中开启border-box
```
*,*::before,*::after{box-sizing: border-box}
```
IE8及以上浏览器都支持此样式。
你还需要设置默认颜色等变量（后续会改为SCSS变量）
```
html{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
```
IE15及以上浏览器都支持此样式。

2.安装DrTire
```
npm install --save drtire-test-2019
```
3.引入DrTire
```vue
import HelloWorld from './components/HelloWorld.vue'
import {Button} from 'drtire-test-2019'
import 'drtire-test-2019/dist/index.css'
export default {
  name: 'app',
  components: {
    HelloWorld,
    "t-button": Button
  }
}
```
## 文档

## 提问

## 变更记录
