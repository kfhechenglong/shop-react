import axios from 'axios';
import qs from 'qs';
// import {myAlert} from 'util/myalert.js'
// import { Spin, Menu } from 'antd';
// import { Loading, MessageBox } from 'element-ui';
// let loading ;
// let needLoadingRequestCount = 0;
// let push_task = [];
// function startLoading() {
//     loading = Spin.service({
//         lock: true,
//         text: '加载中……',
//         customClass:'task-full-loading',
//         background: 'rgba(0, 0, 0, 0.1)'
//     })
// }
// function endLoading() {
//     loading.close()
// }
// function showFullScreenLoading() {
//     // if (process.env.NODE_ENV === 'development') {
//     //     return false
//     // }
//     if (needLoadingRequestCount === 0) {
//         startLoading();
//     }
//     needLoadingRequestCount++;
//     // updatatasks()
// }
// function tryHideFullScreenLoading() {
//     // if (process.env.NODE_ENV === 'development') {
//     //     return false
//     // }
//     if (needLoadingRequestCount > 0){
//         needLoadingRequestCount--;
//     }
//     // updatatasks()
//     if (needLoadingRequestCount === 0) {
//         endLoading();
//         push_task.length = 0;
//     }
// }
// // 更新队列
// function updatatasks(){
//     let ele = document.getElementsByClassName('task-full-loading');
//     if (ele) {
//         let a = ele[0],
//             str = ``;
//         for (let i = 0; i < push_task.length; i++) {
//             const item = push_task[i];
//             str += `<p class="tipsred" style="margin-right:20px;">${i + 1}、${item.value}</>`;
//         }
//         let div = a.getElementsByTagName('div')[0];
//         // 判断是存在子元素
//         let c_div = div.getElementsByTagName('div');
//         let newele;
//         if (c_div && c_div.length > 0){
//             newele = c_div[0];
//             newele.innerHTML = str;
//         } else {
//             newele = document.createElement('div');
//             newele.innerHTML = str;
//             div.appendChild(newele);
//         }
//     }
// }
// function pulltasks(e){
//     // console.log(e);
//     for (let i = 0; i < push_task.length ; i++) {
//         const item = push_task[i];
//         if(item.name === e.name){
//             push_task.splice(i,1);
//             break;
//         }
//     }
// }

// const chatobj = (key) => {
//     const chatList = Object.assign({},kfType);
//     return chatList[key]
// }
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    responseType: 'json',
    method: 'post',
    // timeout: 10000,
    withCredentials: true,
}
// http request 拦截器
axios.interceptors.request.use(
    a => {
        // console.log(a);
        if (a.fullScreenLoading) {
            // showFullScreenLoading()
        }
        return a;
    },
    err => {
        console.log(err);
        return Promise.reject(err);
    }
);
// 退出登录的提示
// const reset_Login = function (response){
//     console.log(response);
//     MessageBox({
//         title: '退出登录提示', message: '系统检查出自动退出登录', showConfirmButton: true, callback: function (action) {
//             if (action === 'confirm'){
//                 if (response.config && response.config.data.includes('type=checklogin')) return response;
//                 window.myapp.login_obj.go_login();
//             }
//         }
//     })
// };
// http response 拦截器
axios.interceptors.response.use(
    response => {
        console.log(response);
        if (response.config && response.config.fullScreenLoading) {

            // tryHideFullScreenLoading()
        }
        if (response.status === 200){
            if (response.data && response.data.code === 601){
                // 拦截是否是查询登录状态接口！
                // reset_Login(response);
                
                return response;
            }
            return response;
        } else{
            console.log(response);
        }
    },
    err => {
        console.log(err);
        if (err.response && err.response.config && err.response.config.fullScreenLoading){
            // pulltasks(err.response.config.url_type);
            // tryHideFullScreenLoading();
        } else if (err.message.includes('timeout')){
            // tryHideFullScreenLoading();
            return Promise.resolve({ msg:'请求超时！'})   // 返回接口返回的错误信息
        }
        // myAlert(err.message);
        return Promise.resolve(err.response || {})   // 返回接口返回的错误信息
    }
)

// console.log(process.env.NODE_ENV);
const errFn = (res) => {
    console.log('状态码：' + res.code + ' 提示：' + res.msg);
    // myAlert(res)
    return res;
};

// 公共api接口
const sendAjax = (o_params) => {
    // console.log(o_params);
    let ax_config = {...config};
    let params;
    if (o_params.hasOwnProperty('fullScreenLoading')){
        // console.log(o_params);
        ax_config.fullScreenLoading = o_params.fullScreenLoading;
        if (o_params.fullScreenLoading){
            ax_config.timeout = 10000;
        }
        params = {
            type:o_params.type,
            data:o_params.data
        }
    } else {
        params = o_params;
    }
    // ax_config.url_type = { name: new Date().getTime().toString() + Math.random().toString(), value: o_params.taskName};
    // if (url === '/index.php'){
    //     params = Object.assign({},params,{
    //         storeid: window.myapp.login_obj.current_store.storeid
    //     });
    // }
    // params = Object.assign({}, params, { clientid: session.getSession('clientid')});
    // console.log(params);
    let base = `https://nx.smsc.net.cn/wxopen/app/shop`;
    if (process.env.NODE_ENV === 'development') {
        base = '/api';
        console.log(process.env.NODE_ENV);
        document.cookie = "PHPSESSID=" + 're8t5ss3v375qeurlt95cgnob5'; 
    }
    return axios.post(`${base}/admin.php/`, qs.stringify(params), ax_config).then((res) => {
        console.log(res.data);
        if (!res.data){
            let url_name = '',
                errMsg = {};
            if (res && res.hasOwnProperty('status')) {
                url_name = res.config && res.config.url_type ? res.config.url_type.value + ' —— ' :'';
                switch (res.status) {
                    case 400: errMsg.message = url_name + '请求错误 '; break;
                    case 401: errMsg.message = url_name + '未授权，请重新登录 '; break;
                    case 403: errMsg.message = url_name + '拒绝访问 '; break;
                    case 404: errMsg.message = url_name + '请求出错 '; break;
                    case 408: errMsg.message = url_name + '请求超时 '; break;
                    case 500: errMsg.message = url_name + '连接服务器错误 '; break;
                    case 501: errMsg.message = url_name + '服务未实现 '; break;
                    case 502: errMsg.message = url_name + '网络错误 '; break;
                    case 503: errMsg.message = url_name + '服务不可用 '; break;
                    case 504: errMsg.message = url_name + '网络超时 '; break;
                    case 505: errMsg.message = url_name + 'HTTP版本不受支持 '; break;
                    default: errMsg.message = url_name + `连接出错！`;
                }
            } else {
                let msg = res.msg || '获取请求数据错误！';
                errFn({ code: '10000', msg: msg });
                return  Promise.resolve({})
            }
            errFn({ code: res.status, msg: errMsg.message});
            return  Promise.resolve({})
        } else {
            if (false){
                return Promise.resolve(res.data)
            } else {
                if (res.data.code === 200 || res.data.code === 201 || res.data.code === 601 || res.data.code === 301 || res.data.code === 502){
                    return Promise.resolve(res.data)
                } else {
                    errFn(res.data);
                    return Promise.resolve(res.data)
                }
            }

        }
    });
};
/*
**配置api
*/

const ajax = (type, params, loading = true) => {
    const apiList = {
        "getCompanyInfo": "getcompany",
        "updateCompanyInfo": "updatecompany",
        "addEmp": "addemp",
        "getEmpList": "getemplist",
        "updateEmp": "updateemp",
        "deletEmp": "delemp",
        "addStore": "addstore",
        "getStoreList": "getstorelist",
        "gudateStore": "updatestore",
        "deletStore": "delstore",
        "addCustomer": "addcustomer",
        "updateCustomer": "updatecustomer",
        "getCustomerList": "getcustomerlist",
        "saveWeekTime": "weektime",
        "getWeekTime": "getweektime",
        'saveDayTime': "addday",
        "getDayTime": "getdays",
        "clearCode": 'clear',
        "getRoles": "getroles",
        "getStore": "getstore",
        "getEmp": "getemp",
        "setRestDays": "setrestdays",
        "getRestDays": "getrestdays",
        "getCustomerQrcode": "getcustomerqrcode",
        "workTime": "worktime",
        "getEmpQrcode": "getempqrcode",
        "clearBindEmp": "clearbindemp",
        "storeBlock": "storeblock",
        "empBlock": "empblock"
    };
    let send_params = { type: apiList[type], data: params, fullScreenLoading: loading };
    console.log(send_params);
    return sendAjax(send_params);
};
export default {
    ajax:ajax,
    sendAjax: sendAjax
}
