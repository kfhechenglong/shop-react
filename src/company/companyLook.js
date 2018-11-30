import React from 'react';
// import { Link } from 'react-router';
import { Card, Button, Row,Col} from 'antd'
import './comp.less';
import 'antd/dist/antd.less';
import CompanyItem from './item.js'


class Company extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			span_w:4,
			content_w:20
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
				<Row>	
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
							<Col span={this.state.span_w}>
								<span>公司logo:</span>
							</Col>
							<Col span={this.state.content_w}>
								<img src={this.props.userInfo.logo} />
							</Col>
						</li>
					</ul>
				</Row>
			</Card>
        </div>
    );
  }
};
export default Company;
