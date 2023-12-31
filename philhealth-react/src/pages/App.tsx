import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import ImageCarousel from '../components/ImageCarousel';
import InfoContent from '../components/InfoContent';
import { useEffect, useState } from 'react';
import { Article, getArticles } from '../services/articles';
import { Card, Columns, Heading } from 'react-bulma-components';

const appStyle = {
  backgroundColor: '#FDFD97'
}

const cardStyle: React.CSSProperties = {
  width: '80%',
  margin: 'auto',
  height: '100px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '20px 0',
  textAlign: 'center',
  color: '#329900',
};

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

      <div style={{ marginTop: '40px', marginBottom: '100px' }}>
        <h3 style={sectionTitleStyle}>Announcements, Job Opportunities, and Others</h3>

        <Columns>
          <Columns.Column size={3}>
          <a href="https://www.philhealth.gov.ph/circulars/2023/">
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Circulars</Heading>
              </Card.Content>
            </Card>
            </a>
          </Columns.Column>

          <Columns.Column size={3}>
          <a href="https://www.philhealth.gov.ph/advisories/2023/">
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Advisories</Heading>
              </Card.Content>
            </Card>
          </a>
          </Columns.Column>

          <Columns.Column size={3}>
          <a href="https://www.philhealth.gov.ph/news/">
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>News</Heading>
              </Card.Content>
            </Card>
            </a>
          </Columns.Column>

          <Columns.Column size={3}>
          <a href="https://www.philhealth.gov.ph/suppliers/iaeb/index.htm">
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>ITB</Heading>
              </Card.Content>
            </Card>
          </a>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column size={4}>
          <a href="/empty-page">
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Offical Statements</Heading>
              </Card.Content>
            </Card>
            </a>
          </Columns.Column>

          <Columns.Column size={4}>
          <a href="/empty-page">
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Job Vacancies</Heading>
              </Card.Content>
            </Card>
          </a>
          </Columns.Column>

          <Columns.Column size={4}>
          <a href="https://www.philhealth.gov.ph/joint_issuances/">
            <Card style={cardStyle}>
              <Card.Content>
                <Heading size={4}>Joint Issuances</Heading>
              </Card.Content>
            </Card>
          </a>
          </Columns.Column>
        </Columns>
      </div>
      
      <div>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
