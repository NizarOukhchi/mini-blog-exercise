import React from 'react';
import { Text } from '@chakra-ui/core';

const CurrentArticle = ({ article }) => {
  return (
    <div style={{ width: '500px', padding: '0 20px' }}>
      <Text fontSize="lg" fontWeight="bold">
        {article.title}
      </Text>
      <Text fontSize="md">{article.body}</Text>
    </div>
  );
};

export default CurrentArticle;
