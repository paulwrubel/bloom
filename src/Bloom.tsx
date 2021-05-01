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
            <Routes />
            {/* <MenuBar></MenuBar> */}
        </>
    );
};

export default Bloom;