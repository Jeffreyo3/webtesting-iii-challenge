// Test away
import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from './Display';

test ("<Display /> snapshop", () =>  {

    const wrapper = rtl.render(<Display />);

    expect(wrapper.asFragment()).toMatchSnapshot();

}); 