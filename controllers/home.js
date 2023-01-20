module.exports = {
  getIndex: (req, res) => {
    //grabs username for access in ejs, if no user then returns undefined
    res.locals.user = req.user?.userName;
    res.render("index.ejs");
  },
};
