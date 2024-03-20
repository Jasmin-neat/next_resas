import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Component: Spinner', () => {
  it('Spinner component is working correctly.', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByTestId('idSpinner');
    expect(spinnerElement).toBeInTheDocument();
  });
});
