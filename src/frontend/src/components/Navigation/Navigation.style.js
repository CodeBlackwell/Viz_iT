import styled from 'styled-components';
import { Link } from 'react-router';

import { Flex } from '../../theme/grid';
import media from '../../theme/media';
import { midnight } from '../../theme/variables';

export const NavigationContainer = styled(Flex)`
    position: fixed;
    z-index: 99;
    right: 6.75em;
    top: 1.8em;
    ${media.tablet`
        transform: rotate(90deg);
        margin: 19.5vh -17vh;
    `}
    ${media.phone`
        transform: rotate(90deg);
        margin: 17vh -16vh;
    `}
    
`;

export const NavItem = styled(Link)`
    margin-right: 30px;
    font-size: 1.5em;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: ${midnight}
    }
    ${media.tablet`
        margin-left: -10px;
        font-size: 1em;
    `}
    ${media.phone`
        margin-left: -10px;
        font-size: .9em;
        margin-top: 17px;
    `}
`;