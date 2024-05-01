const myOrm = require("../module/mySQL/myOrm");

const User = myOrm("users");
const OnlineClass = myOrm("onlineClasses");
const NewsFeed = myOrm("feeds");
module.exports = { OnlineClass, User, NewsFeed };
