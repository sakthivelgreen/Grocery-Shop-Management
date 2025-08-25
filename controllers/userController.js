const User = require('../models/users');
const { generateUserToken } = require('../utils/auth');
async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    try {
        if (!email || !password) throw new Error("Invalid Credentials");
        const user = await User.findOne({ email });
        if (!user) throw new Error('User Not Found');
        if (user.password === password) {
            const token = await generateUserToken(user._id);
            return res.cookie('token', token).redirect('/');
        }
    } catch (error) {
        return res.render('login', { error: error });
    }
}

async function handleUserSignup(req, res) {
    const { fullName, email, phone, password } = req.body;
    try {
        if (password < 5) throw new Error("Password should be at least 5 chars");
        const mail = await User.findOne({ email });
        if (mail) throw new Error(`Email already Exist's Kindly Login! or Try with New Email`);
        try {
            const result = await User.create({ fullName, email, phone, password });
            if (result) {
                const token = await generateUserToken(result._id);
                res.cookie('token', token).redirect('/');
            }
        } catch (error) {
            res.render('signup', { error: error });
        }
    } catch (error) {
        res.render('signup', { error: error });
    }
}

async function handleUserLogout(req, res) {
    res.clearCookie('token').redirect('/');
}

module.exports = {
    handleUserLogin,
    handleUserSignup,
    handleUserLogout
}