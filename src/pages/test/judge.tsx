import React from 'react';
import TestJudgePageTemplate from '../../components/templates/test/judge';
import { fetchAchievedTestStamps, validateUseEffect } from '../../hooks/test';

const TestJudgePage: React.VFC = () => {
  validateUseEffect();
  fetchAchievedTestStamps();

  return <TestJudgePageTemplate />;
};

export default TestJudgePage;
