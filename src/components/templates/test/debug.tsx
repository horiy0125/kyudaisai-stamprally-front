import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import RoundedColorButton from '../../atoms/buttons/rounded-color-button';
import styles from '../../../styles/components/templates/test/debug.module.scss';
import { testStamps } from '../../../constants/test-stamps';
import { achievedTestStampsState } from '../../../recoil/atoms/test';
import {
  clearLocalStorageValue,
  setLocalStorageValue,
} from '../../../utils/window';
import { localStorageKeys } from '../../../constants/local-storage-keys';

const TestDebugPageTemplate: React.VFC = () => {
  const [achievedTestStamps, setAchievedTestStamps] = useRecoilState(
    achievedTestStampsState,
  );

  useEffect(() => {
    console.log(achievedTestStamps);
  }, [achievedTestStamps]);

  const achieveStamp = (key: number) => {
    const updatedAchievedTestStamps = { ...achievedTestStamps };
    updatedAchievedTestStamps[key] = testStamps[key];
    setAchievedTestStamps(updatedAchievedTestStamps);

    const updatedAchievedTestStampsData = JSON.stringify(
      updatedAchievedTestStamps,
    );
    setLocalStorageValue(
      localStorageKeys.achievedTestStamps,
      updatedAchievedTestStampsData,
    );
    window.location.reload();
  };

  const resetAchievements = () => {
    clearLocalStorageValue(localStorageKeys.achievedTestStamps);
    window.location.reload();
  };

  return (
    <div className={styles.root}>
      <h1>Debug Page</h1>

      <section>
        <h2>スタンプを取得済みにする</h2>
        <div className={styles.buttonsWrapper}>
          {Object.keys(testStamps).map((key, index) => (
            <RoundedColorButton
              className={styles.button}
              onClick={() => achieveStamp(Number(key))}
              key={index}
              disabled={achievedTestStamps[key] !== null}
            >
              テストスタンプ{key}
            </RoundedColorButton>
          ))}
        </div>
      </section>

      <section>
        <h2>スタンプの取得状況をリセットする</h2>

        <RoundedColorButton
          className={styles.button}
          onClick={() => resetAchievements()}
        >
          リセット
        </RoundedColorButton>
      </section>
    </div>
  );
};

export default TestDebugPageTemplate;
