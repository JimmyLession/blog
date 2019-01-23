---
title: 基于fastlane实现的iOS自动化打包至fir
date: 2019-01-23 20:38:17     
updated: 2019-01-23 20:38:17  
categories: iOS              
tags: 
- iOS                        
---

## fastlane优势

移动端iOS自动化打包持续集成方案有很多，如`jenkins`,`Xcode Serve`,`fastlane`,本文着重谈论`fastlane`在移动端的集成方案。相较于这三种主流的自动化持续集成，他们有各自的优缺点：
1，[jenkins](https://jenkins.io/doc/)适用于移动端，前端，后端，各种配置及其繁琐。相对于Xcode自带的[Xcode Serve](https://www.jianshu.com/p/7aed0ef67449)傻瓜式下一步操作对新手及其不友好。
2，[fastlane](https://docs.fastlane.tools/)相较于两者只需要一个脚本配置，无需登录网页，无需打开Xcode，只需要终端一个命令即可打包Android和iOS应用。


## 快速开始集成

### 1.集成fastlane环境

使用`ruby`，或者使用`homebrew`安装，两者可以任选一种方式安装。
``` bash 
$ sudo gem install fastlane -NV 
```
```
$ brew cask install fastlane
```
安装完毕后检验是否安装成功

``` bash
$ fastlane --version
```
如果出现下图则说明已经安装成功：

![image.png](https://upload-images.jianshu.io/upload_images/1239125-c59b04c5a6e41f2c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 2.开始使用fastlane

##### 1.先cd到项目根目录
``` bash
$ cd 项目根目录
```
##### 2.初始化fastlane
``` bash
$ fastlane init
```
初始化完毕后会看到项目工程文件夹多了一个名为`fastlane`的文件夹，其中的`Fastfile`文件则是我们持续集成需要配置的脚本文件。

##### 3.Appfile文件配置
```
apple_id "xxx@qq.com"  #你的苹果账户id
team_id "aaaaaa"     #你的团队id
app_identifier "xxx"  #你的应用包名

#如果你的项目没有包含多个target可以不用设置  for_lane

for_platform :ios do
for_lane :dc_dev do
app_identifier 'xxx'   #不同target的包名
end
end

for_platform :ios do
for_lane :dc_release do
app_identifier 'xxx'
end
end

for_platform :ios do
for_lane :dc do
app_identifier 'xxx'
end
end 
```

##### 4.Fastfile文件配置
```
default_platform(:ios) # 指定当前平台，可以设置为 ios 、android、mac

platform :ios do

desc "测试环境包"    #每一个lane 可以看做一个task任务，desc则是改任务的描述
lane :dc_dev do    #每个lane任务的名字
cocoapods  #iOS项目使用cocoapods管理第三方库
sigh(adhoc:true, output_path:'./fastlane')   #iOS项目使用cocoapods管理第三方库
increment_build_number_in_plist(target: "ABM-dev") #自动使该target的build版本号自动加1
build_app(scheme:"aaa",   #build的target 名字 
export_xcargs: "-allowProvisioningUpdates")#获取钥匙串中的内容自动更新描述文件
gym(                                                 #gym则是生成ipa的重要参数
clean: true,                                        #build前清除缓存
output_name:('aaa'),                                #导出ipa的名字
scheme: "aaa",                                      #要编译的target名字
configuration: "Debug",                             #可选 debug 和 release 模式
output_directory: './fastlane',                     #导出ipa路径
export_options: {
method: "ad-hoc",                                 #可选项：app-store（应用商店）  ad-hoc（本地测试包）  enterprise（生成企业包） development （企业内部测试包）
provisioningProfiles: {
"com.abm.app-dev": "xxx"                          #描述文件名字
}
}
)

#fir插件 设置api_token 把应用上传到fir
firim(firim_api_token: "xxxx")

end




desc "正式环境包"
lane :dc do
cocoapods
sigh(adhoc:true, output_path:'./fastlane')
increment_build_number_in_plist(target: "xxx")
build_app(scheme:"xxx",
export_xcargs: "-allowProvisioningUpdates")
gym(
clean: true,
silent: true,
output_name:('xxx'),
scheme: "xxx",
configuration: "Release",
output_directory: './fastlane',
export_options: {
method: "ad-hoc",    
provisioningProfiles: {
"xxx": "xxx"
}
}
)

firim(firim_api_token: "xxx")
end

end

```

##### 5.添加对应插件创建编辑Gemfile文件

```
gem 'fastlane-plugin-firim'
gem 'fastlane'
gem 'cocoapods'
gem 'fastlane-plugin-versioning'

plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')
eval_gemfile(plugins_path) if File.exist?(plugins_path)

```
[如需更多插件详情请在官方文档上查找你想要的插件](https://docs.fastlane.tools/plugins/)
##### 6.运行fastlane
配置好了脚本以后，运行非常简单。只需在项目根目录终端输入：

``` bash
$ fastlane dc_dev  #打包测试包上传至 fir      dc_dev 就是每一个lane的名字
```

### 3.使用后体验

无需配置各种繁琐的证书，无需各种无脑人力劳动进行打包。据说`fastlane`已经为全球的开发者 
节约的时间有近110年的时间。然而上传fir只是`fastlane`冰山一角的功能，还可以上传至`testflight`发布测试版本，上传`AppStore`发布正式版本等等。本文只是`fastlane`的使用基础

用过的都说好，谁用谁知道~~~渍渍渍




