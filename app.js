const express = require('express')
const personModel = require('./PersonModel')
const app = express()
const port = 3000

const staticDir = __dirname + '\\client\\'

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(staticDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

  const nameList = []
  res.render('pages/index.ejs', {name: "Niklas", nameList: nameList})

})

app.post('/savePerson', function (req, res) {

  let person = personModel.cratePerson(req.body.name, req.body.email, req.body.age)

  dBModule.storeElement(person)

  app.render('pages/index.ejs', req.body.name)
})

app.get('/', (req, res) => res.sendFile(__dirname + '\\client\\index.ejs'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))