title: TS 开发 NPM 库
speaker: bugfucker
prismTheme: okaidia
plugins:

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# TS 开发 NPM 库 {.text-landing.text-shadow}

By bugfucker {.text-intro}

[:fa-github: Github](https://github.com/tzfe/toolkit){.button.ghost}

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# 目录

- #### 环境准备
- #### 声明文件
- #### 装饰器语法糖
- #### 本地调试
- #### 发布到 npm

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# npm 注册账号

- #### username
- #### password
- #### email

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# npm 初始化

- #### 项目初始化 `npm init -y`

- #### 库命名 package name 必须与 npm 账号保持一致 `@tzfe/toolkit`

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# ts 初始化

- #### `tsc --init`
- #### 目录说明

  ```js{.text-intro}
  ├─docs            --说明文档
  ├─example         --使用案例
  ├─lib             --编译后js源码
  ├─src             --ts源码
  ├─package.json
  ├─tsconfig.json
  ```

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# 配置说明

```json{.text-intro}
//package.json
{
  "main": "lib/index.js",  //指定入口
  "types": "lib/index.d.ts", //指定声明文件
}

//tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true, // 开启自动生成.d.ts
    "outDir": "lib", //设置编译后输入目录
    "rootDir": "src", //指定源码目录
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "exclude": ["example"] //排除案例目录
}
```

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# 声明文件

- #### [Declare(\*.d.ts)](https://ts.xcatliu.com/basics/declaration-files)

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# 装饰器语法糖

- #### [Decorator](http://es6.ruanyifeng.com/#docs/decorator)

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# 本地调试

#### . > npm link

#### example > npm install ../

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# 发布

- #### npm login
- #### npm publish

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# 遇到问题总结

- #### npm registry 源切换 ，因为在 cnpm（taobao）环境下无法发布
- #### 发布包名空间与账号不匹配，导致发布失败
- #### Object.values 新语法提示不存在

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# Todo

- #### 单元测试 (jest)
- #### [代码风格规范 (prettier+eslint)](https://ts.xcatliu.com/engineering/lint)
- #### 代码提交规范 (commitizen)
- #### 分支管理规范 (branch+tag)

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# 参考资料

- #### [TS 入门教程](https://ts.xcatliu.com/)
- #### [typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter)
