import React from 'react';
import ButtonToggle from '../../uis/ButtonToggle';
import Sidebar from '../../uis/Sidebar';

const ToggleSidebar = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <ButtonToggle></ButtonToggle>
        </div>
    );
};

export default ToggleSidebar;