exports.renderHomepage = async (req, res) => {
    res.render('home');
}

exports.renderLoginPage = async (req, res) => {
    if (req.user) return res.redirect('/');
    res.render('login.ejs');
}
exports.renderSignupPage = async (req, res) => {
    if (req.user) return res.redirect('/');
    res.render('signup.ejs');
}