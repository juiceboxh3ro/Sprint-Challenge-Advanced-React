import React from 'react';
import { render } from "@testing-library/react"

import App from './App';

test('Pupper button exists', () => {
  const { getByText } = render(<App />);

  const pupp = getByText(/犬/i)
});

test('Darkify button exists', () => {
  const { getByText } = render(<App />);

  const darkButton = getByText(/darkify/i)
})

test('World cup data renders', () => {
  const { findByText } = render(<App />);

  const firstPlayer = findByText(/alex morgan/i)
  const lastPlayer = findByText(/tierna davidson/i)
})