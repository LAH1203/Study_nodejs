var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = 3000

app.locals.pretty = true;
app.set('view engine', 'jade')
app.set('views', './views')

// 정적인 파일이 위치할 디렉토리 지정
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// http://localhost:3000/login으로 들어오면 밑의 라우팅 함수가 실행됨
app.get('/login', function(req, res) {
    res.send('<h2>Login please</h2>')
})

app.get('/cp', function(req, res) {
    res.send('Hello Router, <img src = "/cp.png">')
})

// 동적(수정시 바로 반영되지 않음. 재실행 필요. but, 변수 사용가능해 편리)
// 수정시 재실행없이 바로 반영이 필요하다면 정적 사용
app.get('/dynamic', function(req, res) {
    var lis = ''
    for (var i = 0; i < 5; i++) {
        lis = lis + '<li>coding</li>'
    }
    var time = Date()
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
    </html>`
    res.send(output)
})

app.get('/template', function(req, res) {
    res.render('temp', {time:Date(), _title:'Jade'})
})

app.get('/topic/:id', function(req, res) {
    var topics = [
        'Javascript is ...',
        'Node.js is ...', 
        'Express is ...'
    ]
    var str = `
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Node.js</a><br>
    <a href="/topic/2">Express</a><br><br>
    `
    // 쿼리 스트링 방식
    var output = str + topics[req.query.id]
    // 시멘틱 방식
    var output = str + topics[req.params.id]
    res.send(output)
})

// 시멘틱 URL
app.get('/topic/:id/:mode', function(req, res) {
    res.send(req.params.id + ', ' + req.params.mode)
})

app.get('/form', function(req, res) {
    res.render('form')
})

app.get('/form_receiver', function(req, res) {
    var title = req.query.title
    var description = req.query.description
    res.send(title + ', ' + description)
})

app.post('/form_receiver', function(req, res) {
    // body라는 객체를 bodyParser가 추가
    var title = req.body.title
    var description = req.body.description
    res.send('<h1>' + title + ', ' +description + '</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})