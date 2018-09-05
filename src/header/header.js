import React, { Component } from 'react';
import { Avatar, Dropdown, Menu, Icon} from 'antd'
import './header.less';
class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }
  render() {
      const menu = (
          <Menu>
                <Menu.Item key="0">
                  <a href="javascript:;">设&nbsp;&nbsp;&nbsp;&nbsp;置</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="javascript:;">修改密码</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href="javascript:;">退&nbsp;&nbsp;&nbsp;&nbsp;出</a>
                </Menu.Item>
          </Menu>
      );
    return (
        <div className="user-info fr">
            <Avatar alt="用户头像" src={this.props.user.headimg} size={50} iocn="user"/>
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">{this.props.user.nickname}<Icon type="down"/></a> 
            </Dropdown>
        </div>
    );
  }
};
export default MyHeader;
