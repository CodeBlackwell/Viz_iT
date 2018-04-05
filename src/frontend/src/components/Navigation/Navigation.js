import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './Navigation.style';

class NavigationBar extends Component {
    render() {
        return (
            <NavigationContainer>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/twitter">Twitter</NavItem>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;