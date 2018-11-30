import React from 'react';
import { Route, Switch, HashRouter, Link, Router } from 'react-router-dom';
import { Card, Button, Row,Col} from 'antd'
import './comp.less';
import 'antd/dist/antd.less';
import CompanyItem from './item.js'


class CompanyLook extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			span_w:4,
			content_w:20,
		}
	}
  render() {
    return (
        <div className="comp-see">
			<Card title="公司信息" extra={<HashRouter><Link to='/index/edit' replace>编辑</Link></HashRouter>} >
			<ul className="comp-info">
				<li className="">
					<CompanyItem contentName="公司名称：" contentValue={this.props.userInfo.name}/>
				</li>
				<li className="">
					<CompanyItem contentName="公司全称:" contentValue={this.props.userInfo.fullname} />
				</li>
				<li className="">
					<CompanyItem contentName="联系方式:" contentValue={this.props.userInfo.contact} />
				</li>
				<li className="com-logo">
					<Row>
						<Col span={this.state.span_w}>
							<span>公司logo:</span>
						</Col>
						<Col span={this.state.content_w}>
							<img src={this.props.userInfo.logo} />
						</Col>
					</Row>
				</li>
			</ul>
			</Card>
        </div>
    );
  }
};
class CompanyEdit extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			span_w:4,
			content_w:20,
		}
	}
    
  render() {
    return (
        <div className="comp-see">
			<Card title="公司信息" extra={<HashRouter><Link to='/index' replace>查看</Link></HashRouter>}>
			<ul className="comp-info">
				<li className="">
					<CompanyItem contentName="公司名称：" contentValue={this.props.userInfo.name}/>
				</li>
			</ul>
			</Card>
        </div>
    );
  }
};
class Company extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			span_w:4,
			content_w:20,
		}
	}
    
  render() {
    return (
        <div className="comp-see">
			<Route exact path='/index' render={props => {
				return <CompanyLook {...this.props} />
			}} />
			<Route path='/index/edit' component={CompanyEdit} />
        </div>
    );
  }
};
export default Company;
