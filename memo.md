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
