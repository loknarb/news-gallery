import axios from 'axios';
import React from 'react';
import { NewsItemProps, NewsItemType } from '../../pages/types/types';
import useWindowSize from '../hooks/useWindowSize';
import MainDesktop from './MainDesktop';
import MainMobile from './MainMobile';
import MainTablet from './MainTablet';

const Main: React.FC<{ newsItems: NewsItemType[] }> = ({ newsItems }) => {
  const { width } = useWindowSize();
  return (
    <>
      {width! >= 992 ? <MainDesktop /> : ''}
      {width! > 768 && width! < 992 ? <MainTablet /> : ''}
      {width! <= 768 ? <MainMobile /> : ''}
    </>
  );
};

export default Main;
