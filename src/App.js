import React, { useState } from 'react';
import { Flex } from '@chakra-ui/core';

import Editor from './components/Editor';
import ArticlesList from './components/ArticlesList';
import CurrentArticle from './components/CurrentArticle';

const ARTICLES = [
  { id: '1', title: 'this is a title 1', body: 'this is a body 1' },
  { id: '2', title: 'this is a title 2', body: 'this is a body 2' },
  { id: '3', title: 'this is a title 3', body: 'this is a body 3' },
  { id: '4', title: 'this is a title 4', body: 'this is a body 4' },
];

const App = () => {
  const [articles, setArticles] = useState(ARTICLES);
  const [currentArticle, setCurrentArticle] = useState(articles[0]);

  const addArticle = (article) => {
    setArticles([...articles, article]);
    setCurrentArticle(article);
  };

  const updateCurrentArticle = (index) => {
    const newCurrentArticle = articles.find((item) => item.id === index);
    setCurrentArticle(newCurrentArticle);
  };

  const removeArticle = index => {
    const newArticlesList = articles.filter(item => item.id !== index)
    setArticles(newArticlesList)
  }

  return (
    <div style={{ width: '900px', margin: '0 auto', padding: '30px 0' }}>
      <Flex direction="column" align="left" style={{ width: '100%' }}>
        <CurrentArticle article={currentArticle} />
        <Flex align="top" style={{ marginTop: '50px' }}>
          <Editor addArticle={addArticle} />
          <ArticlesList
            articles={articles}
            updateCurrentArticle={updateCurrentArticle}
            removeArticle={removeArticle}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default App;
