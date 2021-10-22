import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);
//^ gets rid of leftover memory
describe('About component', ()=> {
//test 1
it('renders', () => {
    render(<About />);
});

//test 2
it('matches snapchot DOM node structure', ()=> {
 const { asFragment } = render(<About />);
 expect(asFragment()).toMatchSnapshot();
});
})