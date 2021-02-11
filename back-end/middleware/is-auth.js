module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        res.status(401)
        return res.json({
            message: "Not Authorized,  Login and Try again"
        })
    }
    next();
}
