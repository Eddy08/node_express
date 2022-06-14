const express = require('express');

const app = express();
const booksRouter=express.Router();
const port = process.env.PORT || 4000;

booksRouter.route('/books').get((req,res)=>{
  const response ={hello:"This is my response"}
  res.json(response)
})

app.use(express.json())
app.use('/api',booksRouter)
app.get('/', (req, res) => {
  res.send(`hello harsh at ${req.body.empName} ${new Date()}`);
});

app.listen(port);
