import React from 'react';

import { Row,Col} from 'antd'
import 'antd/dist/antd.less';
class CompanyItem extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			span_w:4,
			content_w:20
		}
	}
  render() {
    return (
        <div className="comp-item">
			<Row>	
				<Col span={this.state.span_w}>
					<span>{this.props.contentName}</span>
				</Col>
				<Col span={this.state.content_w}>
					<div className="list-item">
						{this.props.contentValue}
					</div>
				</Col>
			</Row>
        </div>
    );
  }
};
export default CompanyItem;
