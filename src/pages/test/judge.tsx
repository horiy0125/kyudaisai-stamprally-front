import React from 'react';
import TestJudgePageTemplate from '../../components/templates/test/judge';
import { fetchAchievedTestStamps } from '../../hooks/test';

const TestJudgePage: React.VFC = () => {
  fetchAchievedTestStamps();

  return <TestJudgePageTemplate />;
};

export default TestJudgePage;
