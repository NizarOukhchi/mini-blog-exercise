/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/core';

const Editor = ({ addArticle }) => {
  const [article, setArticle] = useState({
    title: '',
    body: '',
  });

  const onArticleChanged = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newArticle = { ...article, [name]: value };
    setArticle(newArticle);
  };

  return (
    <div style={{ width: '450px', padding: '0 20px' }}>
      <FormControl>
        <FormLabel>Article title</FormLabel>
        <Input name="title" value={article.title} onChange={onArticleChanged} />
      </FormControl>
      <FormControl style={{ marginTop: '20px' }}>
        <FormLabel>Article body</FormLabel>
        <Textarea
          name="body"
          value={article.body}
          onChange={onArticleChanged}
        />
      </FormControl>
      <Button
        variantColor="orange"
        style={{ marginTop: '20px' }}
        onClick={() => {
          addArticle(article);
          setArticle({ title: '', body: '' });
        }}
      >
        Create article
      </Button>
    </div>
  );
};

export default Editor;
