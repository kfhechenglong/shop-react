import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import { Route, Switch, HashRouter,Link, Router} from 'react-router-dom';
import api from './commonjs/axios/api.js'
import MyHeader from './header/header.js'
import {PrivateRoute} from './router'
import EleCopany from './company/companyLook.js'
import Login from './login/applogin.js'
const { Header, Sider, Content } = Layout;
const Shehui = function () {
	return (
		<div>社会</div>
	);
};
class Index extends Component {
	constructor() {
		super();
		this.state = {
			userInfo: {}
		};
	}
	componentDidMount() {
		this.getUsrInfo()
	}
	async getUsrInfo() {
		await api.ajax('getCompanyInfo').then((res) => {
			console.log(res);
			if (res.code === 200) {
				this.setState({ userInfo: res.data });
			}
		});
	}
	render(){
		return (
			<div className="w-100 h-100">
				<Layout className="w-100 h-100">
					<Sider>
						<h1 className="h1 t-c">
							<p className="fz24">后台管理系统</p>
							<span className="">Backstage Management System</span>
						</h1>
						<HashRouter>
							<Menu
								mode="inline"
								theme="dark"
							>
								<Menu.Item key="1">
									<Link to='/index' replace>
										<i className="iconfont icon-gongsi" ></i>&nbsp;&nbsp;
											<span>公司信息</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="2">
									<Link to='/index/emp' replace>
										<i className="iconfont icon-yuangongguanli1" ></i>&nbsp;&nbsp;
											<span>员工管理</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="3">
									<Link to='/index/store' replace>
										<i className="iconfont icon-mendian" ></i>&nbsp;&nbsp;
											<span>门店信息</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="4">
									<Link to='/index/cumtomer' replace>
										<i className="iconfont icon-kehu" ></i>&nbsp;&nbsp;
											<span>顾客管理</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="5">
									<Link to='/index/order' replace>
										<i className="iconfont icon-pailie" ></i>&nbsp;&nbsp;
											<span>排班管理</span>
									</Link>
								</Menu.Item>
							</Menu>
						</HashRouter>
					</Sider>
					<Layout className="lay-self">
						<Header className="box-b" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
							<MyHeader user={this.state.userInfo}></MyHeader>
						</Header>
						<Content style={{ padding: '0 20px', marginTop: 70 }}>
							<div>
								<HashRouter>
									<Switch>
										<Route exact path='/index' companyInfo={this.state.userInfo} component={EleCopany} />
										<PrivateRoute path='/index/emp' component={Shehui} />
										<Route path='/index/store' component={Shehui} />
										<Route path='/index/cumtomer' component={Shehui} />
										<Route path='/index/order' component={EleCopany} />
									</Switch>
								</HashRouter>
							</div>
						</Content>
					</Layout>
				</Layout>
			</div>
		)
	};
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			userInfo: {}
		};
	}
	
	render() {
		return (
			<div className="home-main w-100 h-100">
				<HashRouter>
					<Switch>
						<Route path="/index" component={Index} />
						<Route path="/login" component={Login} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

export default App;
