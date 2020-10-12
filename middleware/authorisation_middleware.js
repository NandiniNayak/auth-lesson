function authRedirect(req, res, next) {
    // console.log("session",req.session)
    // console.log("user",req.user)
    if (req.session && req.session.user) {
        return res.redirect("/dashboard");
    }

    return next();
}

module.exports = {
    authRedirect
}