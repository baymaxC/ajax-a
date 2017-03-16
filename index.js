/**
 * Created by BaiShuang on 2016/11/28.
 */
//require()导入模块包 参数模块包的名字
var express = require('express');

//express() 创建服务器对象
var app = express();
/*
 * 配置服务器静态文件夹
 * 静态文件夹中的文件被访问时，会有以下载文件的方式返回给客户端
 * 所以静态文件夹中用于存放html js css jpg等文件
 * */
app.use(express.static('wwwroot'));


/*
* 添加接口（配置服务器接口）（接口可以有多个）
*
* */
/*
* 添加一个注册接口
* */
/*
* get() 表示添加一个请求方式为get的接口
* 参数1:表示接口路径（接口名字）将来客户端可以通过服务器地址
* + 接口路径来访问
* 参数2：回调函数 。当客户端访问这个接口时，函数就会被调用
* req （request） 客户端发来的请求 里面包含本次请求的参数
* res（response）表示本次请求要返回给客户端的数据
*
* */
var users = [];

app.get('/regist',function (req,res) {

    console.log("接收到了get请求")
    
    //query对象（服务器解析请求参数 将结果存储在query对象中）
    //get请求的请求参数可以通过query对象来获取
    console.log(req.query.username);
    console.log(req.query.password);

    var isUsed = false;
    for(var i = 0;i < users.length;i ++){
        if (users[i].username == req.query.username){
            isUsed = true;
            break;
        }
    }
    if (isUsed == true){
        res.end('用户名已经注册，请重新注册')
    }
    else{
        users.push({
            username:req.query.username,
            password:req.query.password
        })

        res.end('注册成功')
    }

    //向客户端发送响应数据
    // res.send("注册成功")

})


app.listen('3000',function () {
    console.log('服务器打开了');

})