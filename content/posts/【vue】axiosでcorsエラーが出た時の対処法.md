---
title: 【Vue】AxiosでCORSエラーが出た時の対処法
description: Vueアウトプット
date: 2021-01-03
tags: vue
path: /article/8
---
### GolangでAPIサーバーを作成したときにCORSエラーがでまくって詰んだのでメモ

vue-cliで作成したファイルのルート階層に`vue.config.js`というファイルを作成

```

module.exports = {
  devServer: {
    proxy: 'http://localhost:8000'
  }
};
```

`vue.config.json`の中は上記のように記述
こうすることで同一のドメインのようにAPIが叩けるらしい。よってCORSエラーが出なくなる

### 結果
うまくできた

CORSエラーが起きた時は試してみて欲しい。

正直個人開発だからこのようなことで対処したけど、根本的な解決には至れていない気がする。これが仕事のときもこのような感じで対応してもいいものなのだろうか。

