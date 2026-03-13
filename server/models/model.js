const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.API_KEY);

const tickers = ['A', 'AAPL', 'AA', 'AACB'];

module.exports.list = async () => {
  try {
    const config = {
      headers: {
        'X-Api-Key': process.env.API_KEY,
        'Content-Type': 'application/json',
      },
    };
    const responseData = [];
    for (let i = 0; i < tickers.length; i++) {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/insidertransactions?ticker=${tickers[i]}`,
        config,
      );
      if (!response.ok) {
        throw new Error(
          `Fetch Failed: ${response.status} ${response.statusText}`,
        );
      }
      const data = await response.json();
      responseData.push(data);
    }
    return responseData;
  } catch (error) {
    return false;
  }
};
