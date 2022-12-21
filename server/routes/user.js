var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const maria = require('../database/connect/maria');
const db = maria.db;
const dbPool = mysql.createPool(db);
const conn = maria.conn;

// 로그인
router.get('/login', (req, res) => {
  res.render('../views/login.html');
});

router.post('/login', function (req, res, next) {
  var id = req.body['id-field'];
  var pwd = req.body['password-field'];
  console.log(req.body);
  console.log(id);
  console.log(pwd);

  conn.query(
    "select * from t_user where login_id='" +
      id +
      "' and password='" +
      pwd +
      "'",
    function (err, rows, fields) {
      if (!err) {
        if (rows.length > 0) {
          req.session.id = id;
          req.session.save(function () {
            res.redirect(`/`);
          });
        } else {
          res.send(
            `<script type="text/javascript">alert("아이디와 비밀번호를 입력하세요!"); document.location.href="/login";</script>`
          );
        }
      } else {
        console.log('query error: ' + err);
      }
    }
  );
});

//로그아웃
router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
});

//회원가입
router.get('/join', (req, res) => {
  res.render('../views/registration.html');
});

router.post('/join', function (req, res, next) {
  var userid = req.body['id'];
  var userPwd = req.body['password'];
  var userPwdChk = req.body['check-password'];
  var username = req.body['username'];
  var phone = req.body['phone-number'];
  var email = req.body['email-first'] + '@' + req.body['email-second'];

  console.log(req.body);

  if (username && userPwd && userPwdChk) {
    console.log(email);

    conn.query(
      'SELECT * FROM t_user WHERE name = ?',
      [username],
      function (error, results, fields) {
        // DB에 같은 이름의 회원아이디가 있는지 확인
        if (error) throw error;
        if (results.length == 0 && userPwd == userPwdChk) {
          // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우
          conn.query(
            'INSERT INTO t_user (login_id,password,name,nickname,email,phone) VALUES(?,?,?,?,?,?)',
            [userid, userPwd, username, userid, email, phone],
            function (error, data) {
              if (error) throw error2;
              res.send(`<script type="text/javascript">alert("회원가입이 완료되었습니다!");
                    document.location.href="/";</script>`);
            }
          );
        } else if (userPwd != userPwdChk) {
          // 비밀번호가 올바르게 입력되지 않은 경우
          res.send(`<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다."); 
                document.location.href="/user/join";</script>`);
        } else {
          // DB에 같은 이름의 회원아이디가 있는 경우
          res.send(`<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); 
                document.location.href="/user/join";</script>`);
        }
      }
    );
  } else {
    // 입력되지 않은 정보가 있는 경우
    res.send(`<script type="text/javascript">alert("입력되지 않은 정보가 있습니다."); 
        document.location.href="/user/join";</script>`);
  }
});

//마이페이지 - 미구현
router.get('/mypage', (req, res) => {
  res.render('../views/my-page.html');
});
router.post('/mypage', function (req, res, next) {});

module.exports = router;
