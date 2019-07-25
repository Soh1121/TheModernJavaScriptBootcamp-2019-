## Section7
### Lecture58.Working With Forms
- 入力フォームと確定ボタンの作成
- ボタンを押したら
    - コンソールに値を出力
    - 入力フォームを空にする

```:html
<!DOCTYPE html>

<html>
  <head></head>
  <body>
    <form id="name-form">
      <input type="text" placeholder="First name" name="firstName">
      <button>Submit</button>
    </form>
    <script src="notes-app.js"></script>
  </body>
</html>
```

```notes-app.js
document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})
```

### Lecture59.Checkboxes
- チェックボックスを作成
- チェックボックスの値を取得（boolean：true/false）

```:html
<!DOCTYPE html>

<html>
  <head></head>
  <body>
    <label>
      <input id="for-fun" type="checkbox">Check me for fun
    </label>
    <script src="notes-app.js"></script>
  </body>
</html>
```

```notes-app.js
document.querySelector('#for-fun').addEventListener('change', function (e) {
    console.log(e.target.checked)
})
```

### Lecture60.Dropdowns
- ドロップダウンを作成
- ドロップダウンの値、ドロップダウンに設定した値を取得  

- ドロップダウンの値を取得する場合
```:html
<!DOCTYPE html>

<html>
  <head></head>
  <body>
    <select id="filter-by">
      <option>Sort by last edited</option>
      <option>Sort by recently created</option>
      <option>Sort alphabetically</option>
    </select>
    <script src="notes-app.js"></script>
  </body>
</html>
```

- ドロップダウンに設定した値を取得する場合
```:html
<!DOCTYPE html>

<html>
  <head></head>
  <body>
    <select id="filter-by">
      <option value="byEdited">Sort by last edited</option>
      <option value="byCreated">Sort by recently created</option>
      <option value="alphabetical">Sort alphabetically</option>
    </select>
    <script src="notes-app.js"></script>
  </body>
</html>
```

- JavaScript
```notes-app.js
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})
```

## Section8
### Lecture62.Saving Our Data in LocalStorage: Part I
- ローカルストレージにデータを保存
  - `key: value` の形式で保存
  - valueに保存できるのは数値・文字列
  - オブジェクトを保存したいのであれば、文字列に変換してから

#### ローカルストレージへのアクセス
```sample.js
// ローカルストレージへ保存
localStrage.setItem('location', 'Philadelphia')

// ローカルストレージから値を取得し、コンソールに表示
console.log(localStrage.getItem('location'))

// ローカルストレージから指定したkeyの値を削除
localStrage.removeItem('location')

// ローカルストレージを初期化
localStrage.clear()
```

#### ローカルストレージへオブジェクトを保存
```sample.js
// サンプルデータ
const user = {
   name: 'Andrew',
   age: 27
}

// 保存方法
// オブジェクトを文字列に変換
const userJSON = JSON.stringify(user)
// 変換してから保存
localStorage.setItem('user', userJSON)

// 取得方法
// データを取得
const userJSON = localStorage.getItem('user')
// データをパース
const user = JSON.parse(userJSON)
// コンソールに表示
console.log(`${user.name} is ${user.age}`)
```

### Lecture73.Syncing Data Across Pages
- ウインドウサイズを取得
  - ウインドウの高さ `window.innerHeight`
  - ウインドウの幅 `window.innerWidth`
- ローカルストレージの変更をイベントとして取得
  - これを活用してページ間のデータ同期を実現

```javascript
window.addEventListener('storage', function (e) {
    console.log('some data changed')
})
```
