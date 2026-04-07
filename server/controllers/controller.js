const model = require(`../models/model.js`);

module.exports.listData = async (req, res) => {
  const data = await model.list();
  if (!data) {
    res.status(404).send({ message: 'Tickers not found' });
    return;
  }
  res.send(data);
};
