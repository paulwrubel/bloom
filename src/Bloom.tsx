import React from 'react'
import Routes from 'Routes'

interface OwnProps {
    myRandomProp?: string
}

const Bloom: React.FC<OwnProps> = ({
    myRandomProp
}) => {
    return (
        <>
            <p>Bloom v0.0.2</p>
            <Routes />
            {/* <MenuBar></MenuBar> */}
        </>
    );
};

export default Bloom;