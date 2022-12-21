var express = require('express');
var router = express.Router();
var db = require('../DBconn');
var path = require('path');
var url = require('url');
var http = require('http');
var fs = require('fs');
const sanitize = require('sanitize');
const { Sequelize } = require('sequelize');
const { and, or, like, not } = Sequelize.Op;

router.get('/', (req, res) => {
  res.render('../html/index.html');
});

router.post('/', function (req, res) {
  var queryData = req.body.query;
  console.log(queryData);
  db.query(
    `SELECT * FROM t_post WHERE title LIKE ?`,
    '%' + queryData + '%',
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        if (result.length === 0) {
          res.json({
            result: false,
            msg: '검색 결과 없음',
          });
        } else {
          res.json({
            result: true,
            msg: '조회 성공',
            list: result,
          });
        }
      }
      console.log(result);
    }
  );
});

module.exports = router;
