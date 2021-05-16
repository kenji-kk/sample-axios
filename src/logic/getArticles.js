import axios from 'axios';

const generateQiitaURL = (tag, maxIndex) => {
  return `https://qiita.com/api/v2/${tag}/タグ/items?page=1&per_page=${maxIndex}`
}

const sortedArticle = (articles) => {
  return articles.sort((a,b) => 
    b.like_count - a.like_count);
}

const getArticles = async (tag, maxIndex)=> {
  const url = generateQiitaURL(tag, maxIndex);
    return await axios
    .get(url)
    .then(({data}) => sortedArticle(data))
    .catch((e) => {
      console.error(e);
    });  
};

export {getArticles};
