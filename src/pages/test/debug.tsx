import React from 'react';
import TestDebugPageTemplate from '../../components/templates/test/debug';
import { fetchAchievedTestStamps } from '../../hooks/test';

const TestDebugPage: React.VFC = () => {
  fetchAchievedTestStamps();

  return <TestDebugPageTemplate />;
};

export default TestDebugPage;
