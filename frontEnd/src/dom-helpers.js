export const renderTickers = (data) => {
  const ul = document.querySelector('#tickers');
  ul.innerHTML = '';
  data.forEach((ticker) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.textContent = ticker[0].ticker;
    li.append(h3);
    ul.append(li);
  });
};
