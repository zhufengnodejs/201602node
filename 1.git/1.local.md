#一、先注册一个github用户
```
https://github.com/join
```

#二、安装git
在命令行中分别配置用户名和邮箱
```
git config --global user.name "你的github用户名"    
git config --global user.email "你的github邮箱"
```

#二、初始化仓库 
先在任意目录右键打开`git-bash`
```
mkdir 201602git 创建空目录
cd 201602git    进入此目录
git init       初始化GIT仓库
```

#切换目录
```
pwd 显示当前的工作目录
cd ..切换到上级目录
cd 目录名 切换到下级指定的目录里

cd /e  git-bash 下切换到E盘的根目录
e:  window 的CMD下切换到E盘根目录
```

#工作流程
```
touch 1.txt 创建一个名字叫 1.txt的文件
git add 1.txt 添加暂存区
git commit -m"add 1.txt" 把1.txt添加历史区
git log 查看历史记录
```
