import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (req.userId !== user._id.toString()) {
    return next(
      createError(403, "Bạn chỉ được phép xóa tài khoản của chính bạn")
    );
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Đã xóa tài khoản");
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
};
