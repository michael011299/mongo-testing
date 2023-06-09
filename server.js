const express = require('express');

const app = express();

app.use(express.json());

const catRoutes = require('./routes/cats');

app.use('/cats', catRoutes);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status).send(err.message);
});

// End of express code
const server = app.listen(4494, () => {
  console.log(`server started on ${server.address().port}`);
});

module.exports = server;
