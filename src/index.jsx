import './main.css';
import React    from 'react';
import ReactDOM from 'react-dom';
import Canvas    from './components/canvas.jsx';

const mountingPoint = document.createElement('div');
mountingPoint.className = 'react-app';
document.body.appendChild(mountingPoint);
ReactDOM.render(<Canvas/>, mountingPoint);