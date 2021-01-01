---
title: 【React】React + TypeScriptでテキストボックスコンポーネント表示させる
description: Reactアウトプット
date: 2021-01-01
tags: "React, JavaScript "
path: /article/7
---
# あけましておめでとうございます！！！

新年明けて早々React+TypeScriptに挑戦したのでアウトプットします。

Vueとはまた違う書き方で少し戸惑いましたがなんとなく掴めてきました。

まずReact+TypeScriptでは基本的に拡張子を`tsx`とします。そうすることでReactないでタイプスクリプトを書くことができます。

親コンポーネント(App.tsx)

```react:App.tsx

import React, { ReactElement } from 'react';
import './assets/css/App.css';
import InputBox from './components/Form/InputBox';

const App: React.FC = (): ReactElement => (
  <InputBox label="aiueo" />
);

export default App;

```

現在のReactは関数ベースで書いていくのが主流のようです。
これがコンポーネントですというのを明示的にしたもののようです。

App定数をエクスポートすることで画面にテキストボックスが表示されます。

続いては子コンポーネント(InputForm.tsx)

```react

import React, { ReactElement, useState } from 'react';

type Props = {
  label: string;
}

const Form: React.FC<Props> = ({ label }): ReactElement => {
  const [setInputValue] = useState({
    inputValue: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue.inputValue = e.target.value;
  }

  return (
    <div className="inputbox-container">
      <label htmlFor="inputbox">{label}</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Form;
```

propsはVue同様親から子にながれてきた値ですね。
ここでハマったのが１つの変数に関数とElementを全て定義するところ
関数は関数といった分割もできるのでしょうが参考になるサイトがあんまりなかった。。。

あと`handleChange`の型くらいでしょうか。

## 所感
Vueの書き方に慣れているせいでどうにも慣れませんでしたが、親から子の流れで何かを表示させることができました。

あとはGoで作成したAPIの繋ぎ込みをReactでするのみ！！！頑張るぞ！