module.exports = async (req, res, next) => {
    try {
        let user = res.locals.user;

        // Create JWT
        const token = createJWTAction(user)

        // Success
        return res.status(200).set('Authorization', 'Bearer ' + token).json({
            access_token: token
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json(error)
    }
};