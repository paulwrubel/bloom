import { Slider, Typography } from '@material-ui/core';
import React from 'react';
import { StyledSliderPaper } from './styles';

interface OwnProps {
    defaultValue: number;
    value: number;
    onChange: (
        event: React.ChangeEvent<Record<string, unknown>>,
        value: number | number[],
    ) => void;
    min: number;
    max: number;
    step: number;
    valueLabelDisplay?: 'on' | 'off' | 'auto';
    labelledByID?: string;
    displayText: string;
}
const SliderPanel: React.FC<OwnProps> = ({
    defaultValue,
    value,
    onChange,
    min,
    max,
    step,
    labelledByID,
    displayText,
}) => {
    return (
        <StyledSliderPaper elevation={1}>
            {/* <SliderPanelWrapper> */}
            <Slider
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                step={step}
                valueLabelDisplay="on"
                aria-labelledby={labelledByID}
            ></Slider>
            <Typography variant="subtitle1" id={labelledByID} gutterBottom>
                {displayText}
            </Typography>
            {/* </SliderPanelWrapper> */}
        </StyledSliderPaper>
    );
};

export default SliderPanel;
