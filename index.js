const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res)=>{
  console.log(req.cookies)

  let existingCookie = req.cookies['spanish-cookie']

  if(existingCookie) {
    res.cookie('spanish-cookie', 'some unique id about my session').send('<h1>Welcome back!</h1><h3>It is so good to have you around again!</h3>')
  } else {
    res.cookie('spanish-cookie', 'nothing :/').send('<h1>Hello! I do not know who you are but welcome anyway</h1>')
  }

})

app.listen(5000, ()=>{
  console.log('Server working and listening to port 5000')
})