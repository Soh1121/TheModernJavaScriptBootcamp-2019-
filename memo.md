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
