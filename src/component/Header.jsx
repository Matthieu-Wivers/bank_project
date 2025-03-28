import React from 'react';
import styled from 'styled-components';

const Header = () => {

return (
    <header style={headerStyle}>
        <div style={leftSectionStyle}>
            <h1 style={h1Style}>Sous le Matelas</h1>
        </div>
            <div style={rightSectionStyle}>
                <button style={buttonStyle}>Button</button>
                <button style={buttonStyle}>Button</button>
                <button style={buttonStyle}>Button</button>
            </div>
    </header>
);
};

const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    zIndex: 1000,
    boxSizing: 'border-box',
};

const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
};

const h1Style = {
    margin: 0,
    letterSpacing: '5px',
};

const rightSectionStyle = {
    display: 'flex',
    gap: '10px',
};

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'white',
    color: '#4CAF50',
    border: '1px solid #4CAF50',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
};

export default Header;
