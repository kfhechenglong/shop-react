import { Route, Redirect, Switch, HashRouter, Link } from 'react-router-dom';
import React, { Component }from 'react';



export class PrivateRoute extends Component{
    constructor(props) {
        super(props);
        this.state = {
            auth: false,     // 表示是否认证通过
            hasAuthed: false,  // 表示是否向服务器发送过认证请求
        };
    }
    render(){
        console.log("author里的store:", this.props)
        let { component: Component, ...rest } = this.props; //获取顶层provider上所有的信息
        // let { isLogin } = this.props.store;
        // console.log("isLogin:", isLogin)
        console.log("this.props:", this.props)
        return (
            <Route {...rest} render={props => {
                return true ? <Component {...this.props} /> : <Redirect to="/login" /> //这里的<Component {...this.props} />实际上指向的是Layout组件
            }} />
        )
    }
}
// export  class PrivateRoute extends Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 auth: false,     // 表示是否认证通过
//                 hasAuthed: false,  // 表示是否向服务器发送过认证请求
//             };
//         }
        
//         componentDidMount() {
//             //authPromise 向服务器发送认证请求，示例以Promise形式返回，result表示认证是否成功
//             // authPromise().then(result => {
//             //     if (result == true) {
//             //         this.setState({ auth: true, hasAuthed: true });
//             //     } else {
//             //         this.setState({ auth: false, hasAuthed: true });
//             //     }
//             // })
//         }

//         render() {
//             let { component: Component, ...rest } = this.props; //获取顶层provider上所有的信息
//             console.log(this.props);
//             console.log(this.state.auth);
//             // 初始渲染时，尚未向服务器发送认证请求，因此不渲染元素
//             if (!this.state.hasAuthed) {
//                 return null;
//             }
//             <Route {...rest} render={props => (
//                 this.state.auth ? (
//                     <Component {...props} />
//                 ) : (
//                         <Redirect to={{
//                             pathname: '/login',
//                             state: { from: props.location }
//                         }} />
//                     )
//             )} />
//         }
//     }

