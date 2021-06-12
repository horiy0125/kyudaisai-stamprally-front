import React from 'react';
import styles from '../../../styles/components/templates/test/debug.module.scss';

const TestDebugPageTemplate: React.VFC = () => {
  return (
    <div className={styles.root}>
      <h1>Debug Page</h1>

      <section>
        <h2>スタンプを取得済みにする</h2>
      </section>
    </div>
  );
};

export default TestDebugPageTemplate;
