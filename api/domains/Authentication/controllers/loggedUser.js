module.exports = async (req, res, next) => {
    return res.status(200).json(res.locals.user);
};