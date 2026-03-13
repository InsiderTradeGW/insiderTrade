import { getTrades } from './fetch-helpers.js';
import { renderTickers } from './dom-helpers.js';

const loadPage = async () => {
  const data = await getTrades();
  renderTickers(data.data);
};

loadPage();
