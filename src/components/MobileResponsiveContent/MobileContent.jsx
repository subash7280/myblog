import React, { useEffect } from 'react';
import './MobileContent.css';

const MobileContent = () => {
    return (
      <div id="mobileMsg">
        <h1 className="heading" data-target-resolver></h1>
        <h2 className="btn-shine">Visit the site on a Desktop</h2>
      </div>
    );
};

export default MobileContent;