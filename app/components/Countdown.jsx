import React, { PropTypes } from 'react';
import Clock from 'Clock';

class Countdown extends React.Component {
    render () {
        return (
            <div>
                <Clock totalSeconds={129} />
            </div>
        );
    }
}

export default Countdown;
