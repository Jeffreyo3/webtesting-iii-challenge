// Test away
import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from './Display';

test ("<Display /> snapshop", () =>  {

    const wrapper = rtl.render(<Display />);

    expect(wrapper.asFragment()).toMatchSnapshot();

}); 

test('Use the red-led class when Locked or Closed', () => {
    let props = {
        closed: true,
        locked: true,
    };

    const { container } = rtl.render(
        <Display closed={props.closed} locked={props.locked} />,
    );

    const buttons = container.querySelectorAll('.led.red-led');
    
    const locked = buttons[0];
    const closed = buttons[1];
    
    expect(locked.textContent).toBe('Locked');
    expect(closed.textContent).toBe('Closed');

});

test('Use the green-led class when Unlocked or Open', () => {
    let props = {
        closed: false,
        locked: false,
    };

    const { container } = rtl.render(
        <Display closed={props.closed} locked={props.locked} />,
    );

    const buttons = container.querySelectorAll('.led.green-led');
    
    const locked = buttons[0];
    const closed = buttons[1];
    
    expect(locked.textContent).toBe('Unlocked');
    expect(closed.textContent).toBe('Open');

});