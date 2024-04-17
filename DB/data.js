import "server-only";

const data = {
  data: () => import("./db.json").then((module) => module.default),
};

export const getData = async () => data["data"]();
