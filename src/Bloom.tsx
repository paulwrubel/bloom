import React from 'react';
import Routes from 'Routes';
import { StyledBloom } from 'styles';
import { StylesProvider } from '@material-ui/core/styles';

const BLOOM_VERSION = 'v0.0.4';

const Bloom: React.FC = () => {
    return (
        <StylesProvider injectFirst>
            <StyledBloom>
                <Routes bloomVersion={BLOOM_VERSION} />
            </StyledBloom>
        </StylesProvider>
    );
};

export default Bloom;
