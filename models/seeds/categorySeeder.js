if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Category = require('../category.js')
const db = require('../../config/mongoose.js')

db.once('open', () => {
  const categoryName = ['家居物業', '交通出行', '休閒娛樂', '餐飲食品', '其他']
  Promise.all(
    categoryName.map(category => {
      return Category.create({ categoryName: category })
    })
  )
    .then(() => {
      console.log('Category done!')
      process.exit()
    })
    .catch(err => res.render('error'))
})