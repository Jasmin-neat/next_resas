import React, { ReactNode } from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store';

import Chart from './chart';

// コンポーネントをラップするモックストアを準備する関数
const renderWithProvider = (component: ReactNode) => {
  return { ...render(<Provider store={store}>{component}</Provider>), store };
};

describe('Component: Chart', () => {
  afterEach(cleanup);

  it('It is working correctly.', () => {
    const { getByText } = renderWithProvider(<Chart />);
    expect(getByText('人口統計資料')).toBeInTheDocument();
  });
});
