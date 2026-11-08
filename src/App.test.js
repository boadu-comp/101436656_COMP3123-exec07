import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Week 09 lab information', () => {
  render(<App />);

  expect(
    screen.getByText('Welcome to Fullstack Development - I')
  ).toBeInTheDocument();

  expect(screen.getByText('101436656')).toBeInTheDocument();

  expect(screen.getByText('Bakim Boadu')).toBeInTheDocument();

  expect(
    screen.getByText('George Brown College, Toronto')
  ).toBeInTheDocument();
});