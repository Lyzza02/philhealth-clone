import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import ImageCarousel from '../components/ImageCarousel';
import InfoContent from '../components/InfoContent';
import { useEffect, useState } from 'react';
import { Article, getArticles } from '../services/articles';
import { Columns } from 'react-bulma-components';

const appStyle = {
  backgroundColor: '#FDFD97'
}

function App() {
  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div className="App" style={appStyle}>
      <div>
        <Header />
      </div>

      <div>
        <ImageCarousel />
      </div>

      <div style={{ marginTop: '60px', marginBottom: '60px' }}>
        <Columns>
          {articles.map((article, index) => (
            <Columns.Column key={index} size={"one-quarter"} className="has-text-centered">
              <InfoContent title={article.title} body={article.body} url={article.url} />
            </Columns.Column>
          ))}
        </Columns>
      </div>

      <div>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
