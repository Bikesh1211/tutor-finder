const { OnlineClass } = require("../model/user");

class OnlineClassService {
  constructor(OnlineClassModel) {
    this.OnlineClassModel = OnlineClassModel;
  }
  async addOnlineClass(body) {
    try {
      const columns = [
        { name: "id", type: "INT AUTO_INCREMENT", primaryKey: true },
        { name: "className", type: "VARCHAR(50)", notNull: true },
        { name: "grade", type: "VARCHAR(50)", notNull: true },
        { name: "medium", type: "VARCHAR(50)", notNull: true },
        { name: "classSchedule", type: "VARCHAR(100)", notNull: true },
        { name: "classPrice", type: "VARCHAR(100)", notNull: true },
        { name: "classLink", type: "VARCHAR(200)", notNull: true },
        { name: "classDetails", type: "VARCHAR(200)", notNull: true },
        { name: "created_at", type: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP" },
      ];

      await this.OnlineClassModel.createTable(columns);
      // await this.OnlineClassModel.dropTable();
      const user = await this.OnlineClassModel.create(body);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async getOnlineClass(body) {
    try {
      return await this.OnlineClassModel.findAll();
    } catch (error) {
      return error;
    }
  }
}
const onlineClassService = new OnlineClassService(OnlineClass);
module.exports = onlineClassService;
