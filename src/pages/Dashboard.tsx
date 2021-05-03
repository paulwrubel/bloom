import React from 'react';
import MenuBar from 'components/MenuBar';

interface OwnProps {
    bloomVersion: string;
}

const Dashboard: React.FC<OwnProps> = ({ bloomVersion }) => {
    return (
        <>
            <MenuBar bloomVersion={bloomVersion} />
            <p>This is the Dashboard!</p>
        </>
    );
};

export default Dashboard;
