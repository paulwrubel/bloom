import { Slider, Typography } from '@material-ui/core';
import React from 'react';
import { SliderPanelWrapper } from './styles';

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
    valueLabelDisplay,
    labelledByID,
    displayText,
}) => {
    return (
        <SliderPanelWrapper>
            <Slider
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                step={step}
                valueLabelDisplay={valueLabelDisplay}
                aria-labelledby={labelledByID}
            ></Slider>
            <Typography id={labelledByID} gutterBottom>
                {displayText}
            </Typography>
        </SliderPanelWrapper>
    );
};

export default SliderPanel;
