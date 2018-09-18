import React, { Component } from 'react';
import { Link } from 'react-router';
import {Card,Button} from 'antd'
import './comp.less';
import 'antd/dist/antd.less';
class Company extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
    editCompanyInfo = () => {
		console.log('编辑公司信息！');
		console.log(this.props);
    }
  render() {
    return (
        <div className="comp-see">
            <Card title="公司信息" extra={<Button type="primary" onClick={this.editCompanyInfo}>编辑</Button>}>
				<ul className="comp-info">
					<li className="">
						<h4>公司简称:</h4>
						<div className="list-item">
							
						</div>
					</li>
					<li className="">
						<h4>公司全称:</h4>
						<div className="list-item">
							
						</div>
					</li>
					<li className="">
						<h4>联系方式:</h4>
						<div className="list-item">
							
						</div>
					</li>
					<li className="">
						<h4>公司Logo:</h4>
						<div className="list-item">
							
						</div>
					</li>
					<li className="">
						<h4>预约小程序:</h4>
						<div className="list-item">
							
						</div>
					</li>
					<li className="">
						<h4>服务号:</h4>
						<div className="list-item">
							
						</div>
					</li>
				</ul>
			</Card>
        </div>
    );
  }
};
export default Company;
