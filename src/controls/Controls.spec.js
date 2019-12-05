// Test away
import React from 'react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Controls from './Controls';

test ("<Controls /> snapshop", () =>  {

    const wrapper = rtl.render(<Controls />);

    expect(wrapper.asFragment()).toMatchSnapshot();

}); 

test ("<Controls /> renders without crashing", () => {

    rtl.render(<Controls />);

});


test ("<Controls /> when open and unlocked", () => {

    const closeSpy = jest.fn();
    const lockSpy = jest.fn();

    const { getByText } = rtl.render(
        <Controls 
            closed={false}
            locked={false}
            toggleClosed={closeSpy}
            toggleLocked={lockSpy}
        />
    );

    const closeBtn = getByText(/close gate/i);
    const lockBtn = getByText(/lock gate/i);

    expect(closeBtn.disabled).toBeFalsy();
    expect(lockBtn.disabled).toBeTruthy();

    rtl.act(() => {
        rtl.fireEvent.click(closeBtn);
    });
    
    expect(lockSpy).not.toBeCalled();
    expect(closeSpy).toBeCalled();

});

test ("<Controls /> when closed and locked", () => {

    const closeSpy = jest.fn();
    const lockSpy = jest.fn();

    const { getByText } = rtl.render(
        <Controls 
            closed={true}
            locked={true}
            toggleClosed={closeSpy}
            toggleLocked={lockSpy}
        />
    );

    const closeBtn = getByText(/open gate/i);
    const lockBtn = getByText(/unlock gate/i);

    expect(closeBtn.disabled).toBeTruthy();
    expect(lockBtn.disabled).toBeFalsy();

    rtl.act(() => {
        rtl.fireEvent.click(lockBtn);
    });
    
    expect(lockSpy).toBeCalled();
    expect(closeSpy).not.toBeCalled();

});