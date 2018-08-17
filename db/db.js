const spicedPg = require("spiced-pg");
let db; //connecting to heroku or localhost
if (process.env.DATABASE_URL) {
  db = spicedPg(process.env.DATABASE_URL);
} else {
  db = spicedPg("postgres:postgres:postgres@localhost:5432/namaste");
}
//////////////////////////////////////////////////////////////////////
exports.orders = function(name, email, address, phone) {
  const query =
    "INSERT INTO orders (name, email,address, phone) VALUES ($1, $2 ,$3, $4) RETURNING *";

  const params = [name, email, address, phone];
  return db.query(query, params).then(results => {
    return results.rows[0];
  });
};
/////////////////////////////////////////////////////////
exports.getOrders = function(orders) {
  const query = "select price from menu where dish = $1;";

  const params = [orders];
  return db.query(query, params).then(results => {
    return results.rows[0];
  });
};
/////////////////////////////////////////////////////////

exports.checkEmail = function(email) {
  const q = "SELECT * FROM orders WHERE email = $1;";
  const params = [email];
  return db.query(q, params).then(results => {
    return results.rows;
  });
};
