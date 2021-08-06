

const middle = (req, res, next) => {
    res.json({ name: "roga", status: "none" });
    next();
}

module.exports = { middle };