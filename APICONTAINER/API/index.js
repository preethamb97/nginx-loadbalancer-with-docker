const express = require('express');
const app = express();
const appId = process.env.APPID;
const PORTNUMBER = appId;
app.get('/', (req, res) => {
  res.send({
    message: `Welcome to ${appId} home page`
  });
});

app.listen(PORTNUMBER, () => {
  console.log(`APP STARTED ON PORT ${appId} for APP id ${appId}`);
})
