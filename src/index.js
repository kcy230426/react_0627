import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/kcy.scss' // scss 반드시 컴포넌트 import (scss는 css로 컴파일해야함!!!)

import {Self, Self2} from './Selftest'
import Portfoilo from './Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Portfoilo/>
);

