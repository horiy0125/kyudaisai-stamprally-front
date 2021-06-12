import React from 'react';
import { useRecoilValue } from 'recoil';
import { testStamps } from '../../../constants/test-stamps';
import { achievedTestStampsState } from '../../../recoil/atoms/test';
import styles from '../../../styles/components/templates/test/index.module.scss';

const TestPageTemplate: React.VFC = () => {
  const achievedTestStamps = useRecoilValue(achievedTestStampsState);

  return (
    <div className={styles.root}>
      {Object.keys(testStamps).map((key, index) => (
        <div className={styles.stamp} key={index}>
          <strong>テストスタンプ{key}</strong>
          <span>
            {achievedTestStamps[Number(key)] === null ? '未取得' : '取得済み'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TestPageTemplate;
