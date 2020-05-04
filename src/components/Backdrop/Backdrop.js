import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    // console.log("[BackDrop] show status = " + props.show);

    const cssClasses = [
      'Backdrop',
      props.show ? 'BackdropOpen' : 'BackdropClosed'
    ];
    return <div className={cssClasses.join(' ')}></div>

};

export default backdrop;
