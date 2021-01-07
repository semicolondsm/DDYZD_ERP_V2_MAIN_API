import jwt from "jsonwebtoken";

const issuanceAccessToken = async (user_id: number): Promise<string> => {
  return jwt.sign({
    user_id: user_id,
    type: "access",
  }, process.env.JWT_SECRET, {
    issuer: "ddyzd",
    expiresIn: "2h",
  });
}

const issuanceRefreshToken = async (user_id: number): Promise<string> => {
  return jwt.sign({
    user_id: user_id,
    type: "refresh",
  }, process.env.JWT_SECRET, {
    issuer: "ddyzd",
    expiresIn: "14d",
  });
}

export { issuanceAccessToken, issuanceRefreshToken }