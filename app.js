const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extends: false
}));
//set static path

app.use(express.static(path.join(__dirname, 'public')))

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

app.get('/users', (req, res) => {
    let user = [{
        firstName: 'john',
        lastName: 'foo',
        age: 34,
        gender: 'male'
    }, {
        secondName: 'fff',
        lastName: 'fofo',
        age: 344,
        gender: 'male'
    }, {
        firstName: 'jodkhn',
        lastName: 'fooldkf',
        age: 34,
        gender: 'male'
    }]
    res.json(user)
})

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, '/download/pdf.pdf'))
})

app.get('/about', (req, res) => {
    res.redirect('/about.html')
})

app.post('/subscribe', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;

    console.log(name, email)
})


// app.get('/about',(req,res)=>{
//     res.send('<h1>about</h1>')
// });

app.get('/users/:name', (req, res) => {
    let user = req.params.name;
    res.send(user)
});

app.listen(3000, () => {
    console.log('server run on 3000');

})