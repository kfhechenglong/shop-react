import React, { Component } from 'react';

import './login.less';

class Login extends Component {
  render() {
    return (
        <div className="login">
            <div className="warp">
                <header className="login-l tc">
                    <h3 className="App-title">欢迎使用后台管理系统</h3>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        </div>
    );
  }
};
const App = <Login/>
export default App;
