import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact form is rendering', () => {
    it('renders', () => {
      render(<Contact />);
    });
  
    it('renders', () => {
      const { asFragment } = render(<Contact />)
      expect(asFragment()).toMatchSnapshot()
    });
  });