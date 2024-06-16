const feedServices = require("../services/feed.service");
const { convertToJSON } = require("../utils/jsonUtils");
const getFeeds = async (req, res) => {
  const body = {
    email: "bikesh@gmail.com1",
  };
  try {
    const data = await feedServices.getFeeds(body);
    res.end(JSON.stringify(data));
  } catch (error) {
    res.end("Internal Server Error");
  }
};

const addNewsFeed = async (req, res) => {
  try {
    const body = convertToJSON(req.body);
    const data = await feedServices.addFeed(body);
    console.log({ data });
    res.end(JSON.stringify({ data, success: true }));
  } catch (error) {
    res.end(JSON.stringify({ error: "Invalid JSON data", success: false }));
  }
};

const loginUser = async (req, res) => {
  try {
    const postData = convertToJSON(req.body);
    const data = await feedServices.loginUser(postData);
    res.end(JSON.stringify({ data }));
  } catch (error) {
    console.error("Error parsing JSON:", error);
    res.end(JSON.stringify({ error: "Invalid JSON data" }));
  }
};

const updateUser = async (req, res) => {
  const { id, ...rest } = convertToJSON(req.body);
  try {
    const data = await feedServices.updateUser(id, rest);
    res.send({ message: "success", data });
  } catch (error) {
    res.send({ message: "Error updating user", error });
  }
};
const deleteUser = async (req, res) => {
  const { id } = convertToJSON(req.body);
  try {
    const data = await feedServices.deleteUser(id);
    res.send({ message: "success", data });
  } catch (error) {
    res.send({ message: "error", error });
  }
};
module.exports = {
  getFeeds,
  updateUser,
  deleteUser,
  loginUser,
  addNewsFeed,
};
