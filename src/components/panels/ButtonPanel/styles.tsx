import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const StyledButtonPaper = styled(Paper)`
    padding: ${(props) => props.theme.spacing(1)}px;
    background-color: ${(props) => props.theme.custom.palette.lightGrey};
`;
