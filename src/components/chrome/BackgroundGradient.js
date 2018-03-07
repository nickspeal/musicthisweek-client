import React from 'react';

const colors = [
  'rgb(48, 105, 97, 0.5)',
  'rgb(5, 10, 10, 0.5)',
  '#c074b2cc',
  '#8ab5e8cc',
  '#2c5e92cc',
  '#552f6dcc',
];
const color1 = colors[Math.floor(Math.random() * colors.length)];
const color2 = colors[Math.floor(Math.random() * colors.length)];
const min = 40;
const max = 100 - min;
const transitionPoint = `${Math.random() * (max - min) + min}%`

const style = {
  backgroundImage: `linear-gradient(${color1}, ${color2} ${transitionPoint})`,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflowY: 'scroll',
}

const BackgroundGradient = (props) => (
  <div style={style}>
    {props.children}
  </div>
);

export default BackgroundGradient;
