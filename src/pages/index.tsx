import React from 'react';
import FullWidthRoundedLink from '../components/atoms/links/full-width-rounded-link';
import { pagePaths } from '../config/page-paths';

const IndexPage: React.VFC = () => {
  return (
    <div>
      IndexPage
      <FullWidthRoundedLink href={pagePaths.test.index}>
        テストTOPへ
      </FullWidthRoundedLink>
    </div>
  );
};

export default IndexPage;
