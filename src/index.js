import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import 'element-theme-default';
import 'antd/dist/antd.less';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
