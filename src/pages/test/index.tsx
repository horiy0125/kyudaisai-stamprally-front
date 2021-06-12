import React from 'react';
import TestPageTemplate from '../../components/templates/test';
import { fetchAchievedTestStamps } from '../../hooks/test';

const TestPage: React.VFC = () => {
  fetchAchievedTestStamps();

  return <TestPageTemplate />;
};

export default TestPage;
