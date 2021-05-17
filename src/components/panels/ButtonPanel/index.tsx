import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { StyledButtonPaper } from './styles';

interface ButtonInfo {
    name: string;
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface OwnProps {
    buttons: ButtonInfo[];
}
const ButtonPanel: React.FC<OwnProps> = ({ buttons }) => {
    return (
        <StyledButtonPaper elevation={1}>
            <Grid container spacing={1}>
                {buttons.map((button) => (
                    <Grid item key={button.name}>
                        <Button
                            disableElevation
                            size="medium"
                            variant="outlined"
                            color="default"
                            onClick={button.onClick}
                        >
                            {button.label}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </StyledButtonPaper>
    );
};

export default ButtonPanel;
