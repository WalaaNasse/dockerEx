import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/students', (req, res) => {
    let data = [
        {id:1, name:"Mhmd"},
        {id:2, name:"Walaa"},
        {id:3, name:"Bob"},
         {id:16, name:"Bohhb"}

    ]
  res.send(data)
})


app.listen(3000)