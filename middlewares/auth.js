const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, 'bismillah');
    req.user = decode;
    next();
  } catch (e) {
    return res.json({
      message: 'error bro',
      error: e
    });
  }
};
