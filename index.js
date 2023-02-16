const express = require("express");

const port = 2002;

const app = express();

app.listen(port, () => {
  console.log(`reading port ${port}`);
});
