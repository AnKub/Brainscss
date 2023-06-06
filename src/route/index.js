// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/indextask', function (req, res) {
  // res.render генерує нам HTML сторінку

  res.render('indextask', {
    layout: 'indextask',
  })
  //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================
router.get('/indextask2', function (req, res) {
  // res.render генерує нам HTML сторінку

  res.render('indextask2', {
    layout: 'indextask2',
  })
  //                  ↑↑ сюди вводимо JSON дані
})
// Підключаємо роутер до бек-енду
module.exports = router
