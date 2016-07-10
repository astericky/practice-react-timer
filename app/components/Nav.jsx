import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <IndexLink to="/"
                            activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown"
                            activeClassName="active-link">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <p>Created by <a href="https://github.com/astericky" target="_blank">Chris Sanders</a></p>
            </div>
        </div>
    );
};

export default Nav;
