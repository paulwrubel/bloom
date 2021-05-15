import React from 'react';
import Routes from 'Routes';
import { StyledBloom } from 'styles';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

const BLOOM_VERSION = 'v0.5.0';

const Bloom: React.FC = () => {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <StyledBloom>
                        <Routes bloomVersion={BLOOM_VERSION} />
                    </StyledBloom>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
};

export default Bloom;
