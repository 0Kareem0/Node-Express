const ipLogger = (req, res, next) => {
    console.log(`Client IP: ${req.ip}`);
    next();
};

module.exports = ipLogger;