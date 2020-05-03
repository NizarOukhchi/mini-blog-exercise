import React from 'react';
import { List } from '@chakra-ui/core';

import ArticleItem from './ArticleItem';

const ArticlesList = ({ articles, updateCurrentArticle, removeArticle }) => {
  return (
    <List style={{ marginLeft: '50px' }}>
      {articles.map((item, index) => (
        <ArticleItem
          key={index}
          article={item}
          updateCurrentArticle={updateCurrentArticle}
          removeArticle={removeArticle}
        />
      ))}
    </List>
  );
};

export default ArticlesList;
