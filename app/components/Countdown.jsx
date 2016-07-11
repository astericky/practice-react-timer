import React, { PropTypes } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm'

class Countdown extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    handleSetCountodwn = (seconds) => {
        this.setState({
            count: seconds
        });
    }

    render () {
        var { count } = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountodwn={this.handleSetCountodwn} />
            </div>
        );
    }
}

export default Countdown;
