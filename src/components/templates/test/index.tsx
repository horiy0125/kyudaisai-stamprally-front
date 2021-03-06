import React from 'react';
import { useRecoilValue } from 'recoil';
import { pagePaths } from '../../../config/page-paths';
import { testStamps } from '../../../constants/test-stamps';
import { achievedTestStampsState } from '../../../recoil/atoms/test';
import styles from '../../../styles/components/templates/test/index.module.scss';
import FullWidthRoundedLink from '../../atoms/links/full-width-rounded-link';

const TestPageTemplate: React.VFC = () => {
  const achievedTestStamps = useRecoilValue(achievedTestStampsState);

  return (
    <div className={styles.root}>
      <h1>
        kyudaisai-stamprally-front
        <br />
        Test Page
      </h1>
      {Object.keys(testStamps).map((key, index) => (
        <div className={styles.stamp} key={index}>
          <strong>テストスタンプ{key}</strong>
          <span>
            {achievedTestStamps[Number(key)] === null ? '未取得' : '取得済み'}
          </span>
        </div>
      ))}
      <FullWidthRoundedLink href={pagePaths.test.debug} className={styles.link}>
        デバッグページへ
      </FullWidthRoundedLink>
    </div>
  );
};

export default TestPageTemplate;
