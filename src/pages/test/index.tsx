import React from 'react';
import TestPageTemplate from '../../components/templates/test';
import { fetchAchievedTestStamps, validateUseEffect } from '../../hooks/test';

const TestPage: React.VFC = () => {
  validateUseEffect();
  fetchAchievedTestStamps();

  return <TestPageTemplate />;
};

export default TestPage;
