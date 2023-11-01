export interface Article {
  url: string;
  title: string;
  body: string;
}

export const getArticles = async () => {
  const articles = await fetch("http://localhost:5000/get-articles").then(async (res)=>{
    const data: Array<Article> = await res.json();
    return data;
  });
  return articles;
}