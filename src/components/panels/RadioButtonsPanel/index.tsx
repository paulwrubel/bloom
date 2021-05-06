import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@material-ui/core';
import React from 'react';
import { StyledRadioButtonsPaper, StyledFormLabel } from './styles';

interface RadioButtonInfo {
    isDefault?: boolean;
    value: string;
    label: string;
}

interface OwnProps {
    name: string;
    label: string;
    value: string;
    onChange: (
        event: React.ChangeEvent<HTMLInputElement>,
        value: string,
    ) => void;
    buttons: RadioButtonInfo[];
}
const SliderPanel: React.FC<OwnProps> = ({
    name,
    label,
    value,
    onChange,
    buttons,
}) => {
    return (
        <StyledRadioButtonsPaper elevation={1}>
            <FormControl>
                <StyledFormLabel>{label}</StyledFormLabel>
                <RadioGroup
                    defaultValue={
                        buttons.find((radioButtonInfo) => {
                            return radioButtonInfo.isDefault;
                        })?.value
                    }
                    aria-label={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    {buttons.map((radioButtonInfo) => {
                        return (
                            <FormControlLabel
                                key={radioButtonInfo.value}
                                value={radioButtonInfo.value}
                                control={<Radio />}
                                label={radioButtonInfo.label}
                            />
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </StyledRadioButtonsPaper>
    );
};

export default SliderPanel;
