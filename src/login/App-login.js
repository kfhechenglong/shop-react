import React, { Component } from 'react';
import { DatePicker,Card} from 'antd'
import './login.less';
import 'antd/dist/antd.less';
class Login extends Component {
  render() {
    return (
        <div className="login">
            <div className="warp">
                <header className="login-l tc">
                    <h3 className="App-title fz22">欢迎使用后台管理系统</h3>
										<p><span>说明：</span> 请使用微信扫一扫登录</p>
                </header>
                <div className="App-intro">
                    <Card className="box-card">
											<div className="code-qq">
                            <iframe title="iframe" id="wxcode" name="wxcode" src="https://nx.smsc.net.cn/wxopen/app/shop/wxweblogin.php" frameBorder="0" scrolling="no" width="400px" height="400px;"></iframe>
                        </div>
										</Card>
										<DatePicker />
                </div>
            </div>
        </div>
    );
  }
};
const App = <Login/>
export default App;
