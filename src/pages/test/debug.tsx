import React from 'react';
import TestDebugPageTemplate from '../../components/templates/test/debug';
import { fetchAchievedTestStamps, validateUseEffect } from '../../hooks/test';

const TestDebugPage: React.VFC = () => {
  validateUseEffect();
  fetchAchievedTestStamps();

  return <TestDebugPageTemplate />;
};

export default TestDebugPage;
