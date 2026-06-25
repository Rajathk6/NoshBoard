// backend/src/server.ts

import app from "./app";

const PORT = 5000;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
