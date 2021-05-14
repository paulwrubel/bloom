import { Drawer, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const ExpandingFlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    flex-grow: 1;
`;

export const AppBarWrapper = styled.div`
    flex-grow: 1;
`;

export const SpaceBox = styled.div`
    margin: 4px;
`;

export const StyledToolbar = styled(Toolbar)`
    height: 56px;
    min-height: 56px;
    border-radius: 0px;
    padding-right: 0px;
`;

export const AppletBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 25vw;
`;

export const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        color: black;
    }
`;

// export const ColorWhiteWrapper = styled.div`
//     color: white;
// `;
