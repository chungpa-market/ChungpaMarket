require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');// 로그인에 필요
const bodyParser=require('body-parser');  // 로그인에 필요
const cookieParser=require('cookie-parser'); //로그인에 필요 

const maria = require('./database/connect/maria');
maria.conn.connect((err) => {
  if (err) throw err;
  console.log('Connected'); // mariadb 연동
});

//html에서 렌더링하여 데이터 전달받기 위해 추가한 코드 - user에서 html 읽어오는데 필요
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile); 

//body parser 설정 (html에서 post방식으로 데이터 전달받기 위함) -user에서 html 읽어오는데 필요 
app.use(express.json()); 
app.use(express.urlencoded({extended:false}));


// 라우터 변수
const indexRouter = require('./routes/index');
const userRouter=require('./routes/user'); 
const searchRouter=require('./routes/search'); 

app.listen(3000, () => {
  console.log('Server started. port 3000.');
});


// cookie and session assign middleWare
app.use(cookieParser());

app.use(
  session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // 쿠기 유효 시간: 1시간
    },
  })
);

// 디비접속정보 =>이거 maria.js로 분리함
// const db = {
//   database: 'dev',
//   connectionLimit: 10,
//   host: process.env.host,
//   user: 'root',
//   password: 'mariadb',
// };

// const dbPool = require('mysql').createPool(db);

// 라우터 연결
app.use('/', indexRouter);
app.use('/user',userRouter); 
app.use('/search',searchRouter); 

// 임시 작성 코드: 게시물에 필요한 정보들 나옴

// 로그인여부확인 임시코드
// app.post('/api/login', async (request, res) => {
//   request.session['email'] = 'iwbm@gmail.com';
//   res.send('ok');
// });

// app.post('/api/logout', async (request, res) => {
//   request.session.destroy();
//   res.send('ok');
// });

// const sql = require('./sql.js');

// app.get('/api/:alias', async (req, res) => {
//   try {
//     res.send(await req.db(req.params.alias));
//   } catch (err) {
//     res.status(500).send({
//       error: err,
//     });
//   }
// });

// app.post('/apirole/:alias', async (reqest, res) => {
//   if (!reqest.session.email) {
//     return res.status(401).send({ error: 'You need to login' });
//   }
//   try {
//     res.send(await req.db(reqest.params.alias));
//   } catch (err) {
//     res.status(500).send({
//       error: err,
//     });
//   }
// });

// const req = {
//   async db(alias, param = [], where = '') {
//     return new Promise((resolve, reject) =>
//       dbPool.query(sql[alias].query + where, param, (error, rows) => {
//         if (error) {
//           if (error.code != 'ER_DUP_ENTRY') console.log(error);
//           resolve({
//             error,
//           });
//         } else resolve(rows);
//       })
//     );
//   },
// };