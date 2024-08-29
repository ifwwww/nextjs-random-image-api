**安装步骤**

1. [fork 本项目](https://github.com/ifwwww/nextjs-random-image-api/fork)
2. 注册[vercel](https://vercel.com/signup)并登录绑定自己的 github 账户
3. Add New... 选择 project
4. import 本项目
5. Deploy
   <img src="https://raw.githubusercontent.com/ifwwww/nextjs-random-image-api/main/nextjs-random-image-api.png"/>
6. 访问[https://domain.com/api/img](/)
   这里请访问您部署完成后 vercel 生成的域名或者绑定自己的域名 + /api/img ，访问此链接无效

增加图片需要修改`data`目录下`imgurl.json`文件，请按照规范格式添加

```
[
  "https://domain.com/1.jpg",
  "https://domain.com/2.jpg",
  "https://domain.com/3.jpg"
]
```

如果本项目对你有帮助，请 Star
