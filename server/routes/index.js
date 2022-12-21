const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// DB정보
const maria = require('../database/connect/maria');
const db = maria.db;
const dbPool = mysql.createPool(db);
const conn = maria.conn;

// 홈화면 get
router.get('/', (req, res, next) => {
  res.send('HI');
});

const sql = require('../sql.js');

// 게시글 리스트 조회
router.get('/api/products/:alias/', (req, res) => {
  conn.query(sql[req.params.alias].query, (err, rows, fields) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log('err : ' + err);
      res.status(500).send({
        error: err,
      });
    }
  });
});

// 게시글 상세
router.get('/api/products/sell/:id', (req, res) => {
  const { id } = req.params;
  conn.query(sql['productDetail'].query + id, (err, rows, fields) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log('err : ' + err);
      res.status(500).send({
        error: err,
      });
    }
  });
});

router.get('/api/products/buy/:id', (req, res) => {
  const { id } = req.params;
  conn.query(sql['productDetail'].query + id, (err, rows, fields) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log('err : ' + err);
      res.status(500).send({
        error: err,
      });
    }
  });
});

router.get('/api/products/share/:id', (req, res) => {
  const { id } = req.params;
  conn.query(sql['productDetail'].query + id, (err, rows, fields) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log('err : ' + err);
      res.status(500).send({
        error: err,
      });
    }
  });
});

// 도서 사진 업로드
app.post('/upload/:productId/:type/:fileName', async (request, res) => {
  let { productId, type, fileName } = request.params;
  const dir = `${__dirname}/uploads/${productId}`;
  const file = `${dir}/${fileName}`;
  if (!request.body.data)
    return fs.unlink(file, async (err) =>
      res.send({
        err,
      })
    );
  const data = request.body.data.slice(
    request.body.data.indexOf(';base64,') + 8
  );
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  fs.writeFile(file, data, 'base64', async (error) => {
    await req.db('productImageInsert', [
      {
        product_id: productId,
        type: type,
        path: fileName,
      },
    ]);

    if (error) {
      res.send({
        error,
      });
    } else {
      res.send('ok');
    }
  });
});

app.get('/download/:productId/:fileName', (request, res) => {
  const { productId, type, fileName } = request.params;
  const filepath = `${__dirname}/uploads/${productId}/${fileName}`;
  res.header(
    'Content-Type',
    `image/${fileName.substring(fileName.lastIndexOf('.'))}`
  );
  if (!fs.existsSync(filepath))
    res.send(404, {
      error: 'Cannot found file.',
    });
  else fs.createReadStream(filepath).pipe(res);
});

const req = {
  async db(alias, param = [], where = '') {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != 'ER_DUP_ENTRY') {
            console.log('err : ' + error);
          }
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};

module.exports = router;
