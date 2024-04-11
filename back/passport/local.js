// passport > local 로그인 전략
const passport = require("passport");
const bcrypt = require("bcrypt");
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        // req.body 설정
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          // email 있는지 확인
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 이메일입니다." });
          }
          // password 확인
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다." });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};

// 로그인 전략
// DB에서 email을 찾는다.
// password가 맞는지 확인한다
// done함수로 에러 혹은 성공 결과를 넘겨줘야 한다.
// done(서버 에러, 성공, 클라이언트 에러)
