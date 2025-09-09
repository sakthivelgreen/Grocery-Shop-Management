exports.renderHomepage = async (req, res) => {
    res.render('home', { user: req.user });
}

exports.renderLoginPage = async (req, res) => {
    if (req.user) return res.redirect('/');
    res.render('Login/login');
}
exports.renderSignupPage = async (req, res) => {
    if (req.user) return res.redirect('/');
    res.render('Login/signup');
}