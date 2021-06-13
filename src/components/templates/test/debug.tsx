import React from 'react';
import { useRecoilState } from 'recoil';
import RoundedButton from '../../atoms/buttons/rounded-button';
import styles from '../../../styles/components/templates/test/debug.module.scss';
import { testStamps } from '../../../constants/test-stamps';
import { achievedTestStampsState } from '../../../recoil/atoms/test';
import {
  clearLocalStorageValue,
  setLocalStorageValue,
} from '../../../utils/window';
import { localStorageKeys } from '../../../constants/local-storage-keys';
import FullWidthRoundedLink from '../../atoms/links/full-width-rounded-link';
import { pagePaths } from '../../../config/page-paths';

const TestDebugPageTemplate: React.VFC = () => {
  const [achievedTestStamps, setAchievedTestStamps] = useRecoilState(
    achievedTestStampsState,
  );

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
            <RoundedButton
              className={styles.button}
              onClick={() => achieveStamp(Number(key))}
              key={index}
              disabled={achievedTestStamps[key] !== null}
            >
              テストスタンプ{key}
            </RoundedButton>
          ))}
        </div>
      </section>

      <section>
        <h2>スタンプの取得状況をリセットする</h2>

        <RoundedButton
          className={styles.button}
          onClick={() => resetAchievements()}
        >
          リセット
        </RoundedButton>
      </section>
      <section>
        <FullWidthRoundedLink href={pagePaths.test.index}>
          テストTOPへ戻る
        </FullWidthRoundedLink>
      </section>
    </div>
  );
};

export default TestDebugPageTemplate;
