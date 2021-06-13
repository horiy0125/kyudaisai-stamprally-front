import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { localStorageKeys } from '../constants/local-storage-keys';
import { achievedTestStampsState } from '../recoil/atoms/test';
import { getLocalStorageValue } from '../utils/window';

export const fetchAchievedTestStamps = () => {
  const setAchievedTestStamps = useSetRecoilState(achievedTestStampsState);

  useEffect(() => {
    const achievedTestStampsData = getLocalStorageValue(
      localStorageKeys.achievedTestStamps,
    );
    if (achievedTestStampsData) {
      const achievedTestStamps = JSON.parse(achievedTestStampsData);
      setAchievedTestStamps(achievedTestStamps);
    }

    console.log('called fetchAchievedTestStamps', achievedTestStampsData);
  }, []);
};

export const validateUseEffect = () => {
  useEffect(() => {
    console.log('called validateUseEffect', typeof window);
  }, []);
};
