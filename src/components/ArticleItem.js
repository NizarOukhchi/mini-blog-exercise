import React from 'react';
import { ListItem, ListIcon, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';

const ArticleItem = ({ article, updateCurrentArticle, removeArticle }) => {
  return (
    <ListItem
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 15,
        cursor: 'pointer',
        transition: '0.2s',
      }}
      css={css`
        &:hover {
          background: #fde5cc;
        }
      `}
    >
      <ListIcon
        icon="close"
        color="orange.500"
        style={{ cursor: 'pointer' }}
        onClick={() => removeArticle(article.id)}
      />
      <Text fontSize="xl" onClick={() => updateCurrentArticle(article.id)}>
        {article.title}
      </Text>
    </ListItem>
  );
};

export default ArticleItem;
