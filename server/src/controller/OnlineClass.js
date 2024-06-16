const onlineClassService = require("../services/onlineclass.service");
const { convertToJSON } = require("../utils/jsonUtils");

const addOnlineClass = async (req, res) => {
  try {
    const body = convertToJSON(req.body);
    console.log({ body });
    const data = await onlineClassService.addOnlineClass(body);
    res.end(JSON.stringify({ data, success: true }));
  } catch (error) {
    res.end(JSON.stringify({ error: "Invalid JSON data", success: false }));
  }
};
const getOnlineClass = async (req, res) => {
  try {
    const data = await onlineClassService.getOnlineClass();
    console.log({ data });
    res.end(JSON.stringify(data));
  } catch (error) {}
};
module.exports = {
  addOnlineClass,
  getOnlineClass,
};
