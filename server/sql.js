module.exports = {
  sell: {
    query: `SELECT id, image_path, title, product_price, content FROM t_post WHERE tags=1`,
  },
  buy: {
    query: `SELECT id, image_path, title, product_price, content FROM t_post WHERE tags=2`,
  },
  share: {
    query: `SELECT id, image_path, title, product_price, content FROM t_post WHERE tags=3`,
  },
  productDetail: {
    query: `SELECT t1.id, image_path, title, product_price, created_time, product_name, method, content, name FROM t_post t1, t_user t2 WHERE t1.user_id = t2.id AND t1.id=`,
  },
  productInsert: {
    query: `INSERT INTO t_post (id, user_id, tags, title, product_name, category_id, product_price, content, image_path, method,created_time,modified_time) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
  },
  // 테이블 구조 확인
  productImageInsert: {
    query: `INSERT INTO t_image set ?`,
  },
  imageList: {
    query: `SELECT * FROM t_image WHERE product_id=?`,
  },
  imageDelete: {
    query: `DELETE FROM t_image WHERE id=?`,
  },
  productDelete: {
    query: `DELETE FROM t_product WHERE id=?`,
  },
};
