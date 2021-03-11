const User = require('../../domains/User/models/user');

module.exports = async (req, res, next) => {
    return res.status(200).json({
        total_users: await User.countDocuments(),
    });
};