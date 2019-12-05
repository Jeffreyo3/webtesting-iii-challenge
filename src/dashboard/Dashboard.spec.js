// Test away
import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from './Dashboard';


test ("<Dashboard /> snapshop", () =>  {

    const wrapper = rtl.render(<Dashboard />);

    expect(wrapper.asFragment()).toMatchSnapshot();

});

test("Initial state displays Unlocked and Open", () => {

    const { getByTestId } =  rtl.render(<Dashboard />);
    const lock = getByTestId('lock');
    const openClose = getByTestId('open-close');

    expect(lock.textContent).toBe('Unlocked');
    expect(openClose.textContent).toBe('Open');

})