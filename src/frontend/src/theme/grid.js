import styled, {css} from 'styled-components';

import media from '../theme/media';

export const Div = styled.div`
    ${ ({marginBottom}) => marginBottom && css`
        margin-bottom: ${marginBottom};
    `}
    ${ ({marginRight}) => marginRight && css`
        margin-right: ${marginRight};
    `}
    ${ ({marginTop}) => marginTop && css`
        margin-top: ${marginTop};
    `}
    ${ ({marginLeft}) => marginLeft && css`
        margin-left: ${marginLeft};
    `}
`;

export const Container = styled(Div)`
    padding-top: 20vh;
    padding-left: 15vw;
    width: 40vw;
`;

export const Relative = styled(Div)`
    position: relative;
`;

export const Flex = styled(Div)`
    display: flex;
    
    ${ ({column}) => column && css`
        flex-direction: column;
    `}
    ${ ({justify}) => justify && css`
        justify-content: ${justify};
    `}
    ${ ({align}) => align && css`
        align-content: ${align};
    `}
`;

export const ScrollFlex = styled(Flex)`
    height: 70vh:
`;