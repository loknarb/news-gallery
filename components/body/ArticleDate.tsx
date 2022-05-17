import React from 'react';
import { NewsItemType } from '../../pages/types/types';

const ArticleDate: React.FC<{ time: NewsItemType['time'] }> = ({ time }) => {
  const dateArticle = time.split('T');
  const date = dateArticle[0];
  const parsed = Date.parse(date);

  const today = Date.now();
  const currentDate = new Date(today);
  const currentDateMidnight = currentDate.setHours(0, 0, 0, 0);
  const artDate = new Date(parsed);
  const artDateMidnight = artDate.setHours(0, 0, 0, 0);
  const articleWeek = new Date(parsed).toLocaleDateString(['en-US'], {
    weekday: 'long',
  });
  const differenceFromToday = Math.abs(currentDateMidnight / 1000 - artDateMidnight / 1000);
  const articleDate = new Date(parsed).toLocaleDateString('en-US', {
    dateStyle: 'long',
  });
  switch (differenceFromToday) {
    case 0:
      return <span>Today</span>;
    case 86400:
      return <span>Yesterday</span>;
    case 172800:
    case 259200:
    case 345600:
    case 432000:
    case 518400:
    case 604800:
      return <span>{articleWeek}</span>;
    default:
      return <span>{articleDate}</span>;
  }
};

export default ArticleDate;
