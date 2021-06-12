import { atom } from 'recoil';
import { TestStamps } from '../../types/test';

export const achievedTestStampsState = atom<TestStamps>({
  key: 'achievedTestStampsState',
  default: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  },
});
