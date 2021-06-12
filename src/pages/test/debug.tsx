import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import TestDebugPageTemplate from '../../components/templates/test/debug';
import { localStorageKeys } from '../../constants/local-storage-keys';
import { achievedTestStampsState } from '../../recoil/atoms/test';
import { getLocalStorageValue } from '../../utils/window';

const TestDebugPage: React.VFC = () => {
  const setAchievedTestStamps = useSetRecoilState(achievedTestStampsState);

  useEffect(() => {
    const achievedTestStampsData = getLocalStorageValue(
      localStorageKeys.achievedTestStamps,
    );
    if (achievedTestStampsData) {
      const achievedTestStamps = JSON.parse(achievedTestStampsData);
      setAchievedTestStamps(achievedTestStamps);
    }
  }, []);

  return <TestDebugPageTemplate />;
};

export default TestDebugPage;
