import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const StyledSwitchPaper = styled(Paper)`
    padding 8px 8px 8px 16px;
    background-color: ${(props) => props.theme.custom.palette.lightGrey};
`;
