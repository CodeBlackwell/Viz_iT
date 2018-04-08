import styled, {css} from 'styled-components';

export const HashtagSVG = styled.svg`
    ${ ({margin, width, height}) => margin && width && height && css`
        width: ${width + margin.right + margin.left};
        height: ${height + margin.top + margin.bottom};
        > g {
            transform: translate(${margin.left}, ${margin.right})
        }
    `}
`;