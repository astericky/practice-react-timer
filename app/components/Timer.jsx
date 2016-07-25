import React, { PropTypes } from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            count: 0,
            timerStatus: 'paused'
        };
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    }

    handleStatusChange = (newTimerStatus) => {
        this.setState({
            timerStatus: newTimerStatus
        });
    }

    render () {
        var { count, timerStatus } = this.state;

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={timerStatus}
                        onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
}

export default Timer;
