import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import React from 'react';
import { StyledSwitchPaper } from './styles';

interface SwitchInfo {
    name: string;
    label: string;
    isChecked: boolean;
    onChange: (
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean,
    ) => void;
}

interface OwnProps {
    switches: (SwitchInfo | undefined)[];
}
const SliderPanel: React.FC<OwnProps> = ({ switches }) => {
    return (
        <StyledSwitchPaper elevation={1}>
            <FormGroup>
                {switches
                    .filter(
                        (switchInfo): switchInfo is SwitchInfo => !!switchInfo,
                    )
                    .map((switchInfo) => (
                        <FormControlLabel
                            key={switchInfo.name}
                            control={
                                <Switch
                                    checked={switchInfo.isChecked}
                                    onChange={switchInfo.onChange}
                                    name={switchInfo.name}
                                />
                            }
                            label={switchInfo.label}
                        />
                    ))}
            </FormGroup>
        </StyledSwitchPaper>
    );
};

export default SliderPanel;
