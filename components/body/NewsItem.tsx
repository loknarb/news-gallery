import React from 'react';
import Card from '../UI/Card';
import Bookmark from './Bookmark';
import Discussion from './Discussion';
import Upvote from './Upvote';

const NewsItem = () => {
  return (
    <Card>
      <Upvote />
      <Discussion />
      <Bookmark />
    </Card>
  );
};

export default NewsItem;
