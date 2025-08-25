const { validateUserToken } = require('../utils/auth');

exports.isLoggedIn = (req, res, next) => {
    const token = req.cookies['token'];
    if (!token) return next();
    try {
        const userPayload = validateUserToken(token);
        req.user = userPayload;
        next();
    } catch (error) {
        return next();
    }
}

exports.isAuthenticated = (req, res, next) => {
    if (!req.user) return res.redirect('/login');
    next();
}

exports.onlyGrantAccessToAdmin = (role) => {
    return function (req, res, next) {
        const token = req.cookies['token'];
        if (!token) return res.redirect('/');
        try {
            const userPayload = validateUserToken(token);
            if (userPayload.role === role) {
                req.user = userPayload;
                next();
            } else return res.redirect('/');
        } catch (error) {
            return res.redirect('/');
        }
    }

}