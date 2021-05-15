import { Drawer } from '@material-ui/core';
import styled from 'styled-components';

export const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        color: black;
    }
`;

export const ListItemWrapper = styled.div`
    .MuiListItem-root {
        padding-left: ${(props) => props.theme.spacing(4)}px;
    }
`;
