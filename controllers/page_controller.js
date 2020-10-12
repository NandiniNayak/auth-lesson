function index(req, res) {
    res.render("home");
    // req.session.views = req.session.views ? req.session.views + 1 : 1;
    // res.json(req.session.views);
}
function dashboard(req, res) {
    // res.send("Welcome to your dashboard!");
    const email = req.session.user.email;
    res.render("dashboard", { email });
}


module.exports = {
    index,
    dashboard
}