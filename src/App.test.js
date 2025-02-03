// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Activities/i);
  expect(linkElement).toBeInTheDocument();
});
