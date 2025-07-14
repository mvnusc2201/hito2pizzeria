import { readJson, writeJson } from "../utils/fs.js";

const filePath = "./db/users.json";

export const authModel = {
  async getUserByEmail(email) {
    const users = await readJson(filePath);
    return users.find((user) => user.email === email);
  },
  async addUser(user) {
    const users = await readJson(filePath);
    users.push(user);
    await writeJson(filePath, users);
  },
};
