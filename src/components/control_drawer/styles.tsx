import { Drawer } from '@material-ui/core';
import styled from 'styled-components';

export const ControlDrawerWrapper = styled.div``;

export const StyledControlDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        margin-top: 56px;
        height: calc(100% - 56px);
        width: 25vw;
        overflow-x: hidden;

        background-color: ${(props) =>
            props.theme.palette.controlsDrawerBackgroundColor};
    }

    .MuiPaper-root {
        color: white;
    }
`;

export const GridContainerWrapper = styled.div`
    padding 5px;
`;

export const GridItemWrapper = styled.div`
    padding 5px;
`;
