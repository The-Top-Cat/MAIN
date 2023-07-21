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


function recommendSong(playlist) {
  try {
    // Check if the playlist is an array
    if (!Array.isArray(playlist)) {
      throw new TypeError("The playlist must be an array");
    }

    // Check if the playlist is empty
    if (playlist.length === 0) {
      throw new Error("The playlist is empty");
    }

    // Implement your recommendation logic here
    // For example, you can return a random song from the playlist
    const randomIndex = Math.floor(Math.random() * playlist.length);
    return playlist[randomIndex];
  } catch (error) {
    // Log the error
    console.error(error);
    return null;
  }
}
