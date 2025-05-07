const Login = require("../models/login");
async function getuser(req, res) {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ where: { username } });

        if (!user || !user.isValidPassword(password)) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { getuser };
