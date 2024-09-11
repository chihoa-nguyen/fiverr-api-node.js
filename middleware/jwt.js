import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token)
    return next(
      createError(401, "Bạn chưa xác thực, hãy đăng nhập tài khoản trước")
    );
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token không còn giá trị!"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
