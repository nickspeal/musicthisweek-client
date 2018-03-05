import React from 'react';

const colors = [
  'rgb(48, 105, 97)',
  'rgb(5, 10, 10)',
  '#c074b2',
  '#8ab5e8',
  '#2c5e92',
  '#552f6d',
];
const color1 = colors[Math.floor(Math.random() * colors.length)];
const color2 = colors[Math.floor(Math.random() * colors.length)];
const transitionPoint = `${Math.random() * 100}%`

const style = {
  backgroundImage: `linear-gradient(${color1}, ${color2} ${transitionPoint})`,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const BackgroundGradient = (props) => (
  <div style={style}>
    {props.children}
  </div>
);

export default BackgroundGradient;
