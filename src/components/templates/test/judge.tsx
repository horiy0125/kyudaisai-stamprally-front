import React, { useEffect, useState } from 'react';
import router from 'next/router';
import { useRecoilState } from 'recoil';
import styles from '../../../styles/components/templates/test/judge.module.scss';
import { achievedTestStampsState } from '../../../recoil/atoms/test';
import { testStamps } from '../../../constants/test-stamps';
import { Stamp } from '../../../types/stamp';
import RoundedButton from '../../atoms/buttons/rounded-button';
import FullWidthRoundedLink from '../../atoms/links/full-width-rounded-link';
import { pagePaths } from '../../../config/page-paths';
import { setLocalStorageValue } from '../../../utils/window';
import { localStorageKeys } from '../../../constants/local-storage-keys';

const TestJudgePageTemplate: React.VFC = () => {
  const { query } = router;

  const [isAchieved, setIsAchieved] = useState(false);
  const [applicableStampKey, setApplicableStampKey] = useState<string | null>(
    null,
  );
  const [achievedTestStamps, setAchievedTestStamps] = useRecoilState(
    achievedTestStampsState,
  );

  useEffect(() => {
    if (Boolean(query.id) && Boolean(query.name)) {
      const id = query.id;
      const name = query.name;

      const applicableStamps = Object.keys(testStamps).filter(key => {
        const testStamp: Stamp = testStamps[Number(key)];

        if (id === testStamp.id && name === testStamp.name) {
          return key;
        }
      });

      if (applicableStamps.length === 1) {
        const applicableStampKey = applicableStamps[0];
        setApplicableStampKey(applicableStampKey);

        if (achievedTestStamps[applicableStampKey] !== null) {
          setIsAchieved(true);
        }
      }
    }
  }, [achievedTestStamps, query]);

  const achieveStamp = () => {
    const updatedAchievedTestStamps = { ...achievedTestStamps };
    updatedAchievedTestStamps[applicableStampKey] =
      testStamps[applicableStampKey];
    setAchievedTestStamps(updatedAchievedTestStamps);

    const updatedAchievedTestStampsData = JSON.stringify(
      updatedAchievedTestStamps,
    );
    setLocalStorageValue(
      localStorageKeys.achievedTestStamps,
      updatedAchievedTestStampsData,
    );

    router.push(pagePaths.test.index);
  };

  return (
    <div className={styles.root}>
      {applicableStampKey && isAchieved === false ? (
        <>
          <h1>
            未取得のスタンプ
            <br />
            {testStamps[String(applicableStampKey)].name}を
            <br />
            見つけました！
          </h1>
          <RoundedButton onClick={() => achieveStamp()}>取得する</RoundedButton>
        </>
      ) : null}
      {Boolean(applicableStampKey) === false ? (
        <>
          <h1>無効なスタンプです。</h1>
          <p>正規のスタンプを取得し直してください。</p>
        </>
      ) : null}
      {isAchieved ? (
        <>
          <h1>このスタンプは取得済みです。</h1>
          <FullWidthRoundedLink href={pagePaths.test.index}>
            テストTOPに戻る
          </FullWidthRoundedLink>
        </>
      ) : null}
    </div>
  );
};

export default TestJudgePageTemplate;
