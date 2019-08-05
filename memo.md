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

### Lecture74.JavaScript Dates
- 現在時刻を取得（年・月・日・時・分・秒・曜日・TZ）

```javascript
// 現在時刻の取得
const now = new Date()
// 表示するには文字列に変換
console.log(now.toString())

// 年を文字列で抽出
console.log(`Year: ${now.getFullYear()}`)
// 月を文字列で抽出
console.log(`Month: ${now.getMonth()}`)
// 日を文字列で抽出
console.log(`Day of month: ${now.getDate()}`)
// 時を文字列で抽出
console.log(`Hour: ${now.getHours()}`)
// 分を文字列で抽出
console.log(`Minute: ${now.getMinutes()}`)
// 秒を文字列で抽出
console.log(`Seconds: ${now.getSeconds()}`)

// 特定の日時を生成
const now = new Date('January 21 2001 6:25:01')
```

### Lecture75.Moment
- 日時を扱う便利なライブラリ
- [Moment.js](https://momentjs.com/)

## Section9
### Lecture80.Arrow Function: Part I
- arrow関数の基本
- 関数の表記を簡略化可能
- 次の2つの関数は同じ

```javascript
const under30 = people.filter(function (person) {
    return person.age < 30
})

const under30 = people.filter((person) => person.age < 30)
```

### Lecture81.Arrow Function: Part II
- arrow関数では関数でできる引数の配列指定はできない

```javascript
const add = function (a, b) {
  return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))
// 33

const add = () => {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))
//[object Object]function require(path) {
//    return mod.require(path);
//  }
```

- メソッドはarrow関数化できない
- 代わりに`: function`を省略可

```javascript
const car = {
    color: 'Red',
    getSummary: function () {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())
// The car is Red

const car = {
    color: 'Red',
    getSummary: () => {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())
// The car is undefined

const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())
// The car is Red
```

### Lecture85.Catching and throwing Errors
- 例外を投げたいとき
```try-catch.js
const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw 'Argument must be a number'
    }
}

const result = getTip('test')
console.log(result)
```

```
/***/try-catch.js:5
        throw 'Argument must be a number'
        ^
Argument must be a number
```

- 詳細も入れて例外を投げたいとき
```try-catch.js
const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

const result = getTip('test')
console.log(result)
```

```
/***/try-catch.js:5
        throw Error('Argument must be a number')
        ^

Error: Argument must be a number
    at getTip (/***/try-catch.js:5:15)
    at Object.<anonymous> (/***/try-catch.js:9:16)
    at Module._compile (***/loader.js:759:30)
    at Object.Module._extensions..js (***/loader.js:770:10)
    at Module.load (***/loader.js:628:32)
    at Function.Module._load (***/loader.js:555:12)
```

- エラー処理
```javascript
try {
  エラーや例外が発生する可能性のある処理
} catch (e) {
  エラーや例外が発生した場合の処理
}
```
