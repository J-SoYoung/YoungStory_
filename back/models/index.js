const Sequelize = require("sequelize");

// config에 개발용 DB를 넣음. 나중에는 development가 아닌 production
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

// sequelize(mysql2사용)가 node.js와 mysql 연결
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

console.log(sequelize);
// 시퀄라이즈 모델 등록 = require로 해당 함수를 실행한다. db의 빈 객체에 모델 넣음
db.Category = require("./category")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);
db.Hashtag = require("./hashtag")(sequelize, Sequelize);
db.Image = require("./image")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);

// 관계형 db실행
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
