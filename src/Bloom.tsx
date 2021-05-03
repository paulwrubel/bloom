import React from 'react'
import Routes from 'Routes'
import { StyledBloom } from 'styles';

const BLOOM_VERSION = "v0.0.3"

const Bloom = () => {
    return (
        <StyledBloom>
            <Routes bloomVersion={BLOOM_VERSION} />
        </StyledBloom>
    );
};

export default Bloom;