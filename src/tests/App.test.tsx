import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Vite + React + Tailwindcss heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Vite \+ React \+ Tailwindcss/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders count button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is/i);
  expect(buttonElement).toBeInTheDocument();
});
