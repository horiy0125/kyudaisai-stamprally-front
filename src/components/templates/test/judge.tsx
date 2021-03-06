import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
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
            ????????????????????????
            <br />
            {testStamps[String(applicableStampKey)].name}???
            <br />
            ?????????????????????
          </h1>
          <RoundedButton onClick={() => achieveStamp()}>????????????</RoundedButton>
        </>
      ) : null}
      {Boolean(applicableStampKey) === false ? (
        <>
          <h1>??????????????????????????????</h1>
          <p>?????????????????????????????????????????????????????????</p>
        </>
      ) : null}
      {isAchieved ? (
        <>
          <h1>??????????????????????????????????????????</h1>
          <FullWidthRoundedLink href={pagePaths.test.index}>
            ?????????TOP?????????
          </FullWidthRoundedLink>
        </>
      ) : null}
    </div>
  );
};

export default TestJudgePageTemplate;
