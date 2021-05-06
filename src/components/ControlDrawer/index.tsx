import { Grid } from '@material-ui/core';
import ControlPanel from 'components/ControlPanel';
import React from 'react';
import { GridContainerWrapper, StyledControlDrawer } from './styles';

interface OwnProps {
    children: React.ReactNode;

    isControlDrawerOpen: boolean;
}

const ControlDrawer: React.FC<OwnProps> = ({
    children,
    isControlDrawerOpen,
}) => {
    return (
        <StyledControlDrawer
            variant="persistent"
            open={isControlDrawerOpen}
            anchor="right"
        >
            <GridContainerWrapper>
                <Grid container direction="column">
                    {React.Children.map(children, (child) => {
                        return <ControlPanel>{child}</ControlPanel>;
                    })}
                </Grid>
            </GridContainerWrapper>
        </StyledControlDrawer>
    );
};

export default ControlDrawer;
