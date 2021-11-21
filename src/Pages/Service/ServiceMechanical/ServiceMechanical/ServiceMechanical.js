import React from 'react';
import MechanicalBanner from '../MechanicalBanner/MechanicalBanner';
import MechanicalBody from '../MechanicalBody/MechanicalBody';
import MoreService from '../MoreService/MoreService';

const ServiceMechanical = () => {
    return (
        <div>
            <MechanicalBanner></MechanicalBanner>
            <MechanicalBody></MechanicalBody>
            <MoreService></MoreService>
        </div>
    );
};

export default ServiceMechanical;