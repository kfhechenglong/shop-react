import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import { Route, Switch, HashRouter,Link} from 'react-router-dom';
import api from './commonjs/axios/api.js'
import EleCopany from './company/companyLook.js'
const { Header, Sider, Content } = Layout;
const Home = function () {
	return (
		<div>Home</div>
	);
};
const Shehui = function () {
	return (
		<div>社会</div>
	);
};

const Guonei = function () {
	return (
		<div>国内</div>
	);
};

class App extends Component {
	componentDidMount() {
		this.test()
	}
	async test(){
		await api.ajax('getCompanyInfo').then((res) => {
			console.log(res);
		});
	}
	render() {
		return (
			<div className="home-main w-100 h-100">
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
									<Link to='/company' replace>
										<i className="iconfont icon-gongsi" ></i>&nbsp;&nbsp;
										<span>公司信息</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="2">
									<Link to='/emp' replace>
										<i className="iconfont icon-yuangongguanli1" ></i>&nbsp;&nbsp;
										<span>员工管理</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="3">
									<Link to='/store' replace>
										<i className="iconfont icon-mendian" ></i>&nbsp;&nbsp;
										<span>门店信息</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="4">
									<Link to='/cumtomer' replace>
										<i className="iconfont icon-kehu" ></i>&nbsp;&nbsp;
										<span>顾客管理</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="5">
									<Link to='/order' replace>
										<i className="iconfont icon-pailie" ></i>&nbsp;&nbsp;
										<span>排班管理</span>
									</Link>
								</Menu.Item>
							</Menu>
						</HashRouter>
					</Sider>
					<Layout>
						<Header>
							
						</Header>
						<Content>
							<div>
								<HashRouter>
									<Switch>
										<Route exact path='/company' component={EleCopany} />
										<Route path='/emp' component={Shehui} />
										<Route path='/store' component={Guonei} />
										<Route path='/cumtomer' component={Guonei} />
										<Route path='/order' component={Guonei} />
									</Switch>
								</HashRouter>
								</div>
						</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default App;
