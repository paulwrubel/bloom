import { FormLabel, Paper } from '@material-ui/core';
import styled from 'styled-components';

export const StyledRadioButtonsPaper = styled(Paper)`
    padding 15px 25px 5px 25px;
    background-color: ${(props) => props.theme.custom.palette.lightGrey};
`;

export const StyledFormLabel = styled(FormLabel)`
    // .Mui-focused {
    color: ${(props) => props.theme.palette.primary.main};
    // }
`;
