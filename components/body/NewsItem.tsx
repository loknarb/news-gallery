import React from 'react';
import Card from '../UI/Card';
import Bookmark from '../UI/Bookmark';
import Discussion from '../UI/Discussions';
import Upvote from '../UI/Upvote';

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
