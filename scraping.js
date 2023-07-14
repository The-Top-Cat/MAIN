// Scraping code


const cheerio = require('cheerio');

async function scrapeNews(url) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const headlines = [];
  $('.headline').each((_idx, el) => {
    const headline = $(el).text();
    headlines.push(headline);
  });

  return headlines;
}

const headlines = await scrapeNews('https://www.bbc.com/news');

for (const headline of headlines) {
  console.log(headline);
}


const cheerio = require('cheerio');

async function scrapeArticles(url) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const articles = $('article');
  return articles;
}

const articles = await scrapeArticles('https://www.bbc.com/news/world');

for (const article of articles) {
  console.log(article.text());
}

const cheerio = require('cheerio');

async function scrapeArticle(url) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const article = $('article');
  const text = article.find('div', class_='story-body__inner').text();
  return text;
}

const text = await scrapeArticle('https://www.bbc.com/news/world-us-canada-62130306');
  console.log(text);
