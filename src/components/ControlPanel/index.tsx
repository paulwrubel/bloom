import { Grid } from '@material-ui/core';
import React from 'react';
import { GridItemWrapper } from './styles';

interface OwnProps {
    children: React.ReactNode;
}

const ControlPanel: React.FC<OwnProps> = ({ children }) => {
    return (
        <GridItemWrapper>
            <Grid item xs>
                {children}
            </Grid>
        </GridItemWrapper>
    );
};

export default ControlPanel;
