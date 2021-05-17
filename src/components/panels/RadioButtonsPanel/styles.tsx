import { FormLabel, Paper } from '@material-ui/core';
import styled from 'styled-components';

export const StyledRadioButtonsPaper = styled(Paper)`
    padding 16px 16px 8px 16px;
    background-color: ${(props) => props.theme.custom.palette.lightGrey};
`;

export const StyledFormLabel = styled(FormLabel)`
    // .Mui-focused {
    color: ${(props) => props.theme.palette.primary.main};
    // }
`;
