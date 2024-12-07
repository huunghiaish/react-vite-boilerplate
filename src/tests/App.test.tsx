// src/tests/App.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders Vite + React + Tailwindcss heading', () => {
    render(<App />);
    const heading = screen.getByText(/Vite \+ React \+ Tailwindcss/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders count button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count/i });
    expect(button).toBeInTheDocument();
  });
});

