/* jshint esversion: 6 */ 
var app = getApp();
var WXBizDataCrypt = require('./RdWXBizDataCrypt.js');
var AppId = '';
/**
 * 此文件管理项目所有接口
 */
import { get, post, put, del } from './network';

/**
 * API_ROOT 服务器根域名
 * @type {string}
 */
export const API_ROOT = 'https://xcpt.gzxmyy.com';

export let BUYERINFO = wx.getStorageSync('buyerInfo');


/**
 * 试玩更多接口看这里
 * Test 数据请求
 */
export const getTest = function() {
  wx.switchTab({
    url: '../../home/home'
  });
};

export const postTest = (code) => post(`${API_ROOT}/test`, { code: code}).then(data => {
  console.log('data',data);
}).catch(error => {
  console.log(error);
});
//获取oppenID
export const getOppenId = (code) => post(`${API_ROOT}/getOpenId`, { code: code }).then(data => { 
  var pc = new WXBizDataCrypt(AppId, data.session_key);
  wx.getUserInfo({
    success: function (res) {
      var data = pc.decryptData(res.encryptedData, res.iv);
      wx.setStorageSync('userInfo', data);
    }
  });
  wx.setStorageSync('oppenid', data);
}).catch(error => {
  console.log(error);
});
//获取用户信息（后端解密）
export const getUserInfo = (encryptedData, iv, code) => post(`${API_ROOT}/getUserInfo`, {
  encryptedData: encryptedData,
  iv: iv,
  code: code
}).then(data => {
  wx.setStorageSync('userInfo', data);
}).catch(error => {
  console.log(error);
});
//当前前登录城市
export const getLocaltion = (latitude, longitude) => get(`${API_ROOT}/getLocaltion`, {
  latitude: latitude,
  longitude: longitude
}).then(res => {
  var city = res.result.addressComponent.city;
  // city = city.replace("市", "");
  wx.setStorageSync('city', city);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

//登录
// export const loginCheck = (openId, gender, nickname, headimgurl, loginCountry, mobile, smsCode) => post(`${API_ROOT}/buyer/wxlogin`, {
export const loginCheck = (data) => post(`${API_ROOT}/api/buyer/wxlogin`, data)
  .then(data => {
    if (data.serveCode == 602) {
      // wx.reLaunch({
      //   url: '/pages/login/login?getUserInfoFail=0'
      // });
    }
    else if(data.code == 200) {
      wx.setStorageSync('buyerInfo', data.data);

      wx.reLaunch({
        url: '/pages/home/home',
      });
    }
    else {
      wx.setStorageSync('buyerInfo', data.data);
    }
  }).catch(error => {
    console.log(error);
  });

//获取短信验证码
export const getCode = (data) => post(`${API_ROOT}/api/buyer/wxlogin`, data)
.then(res => {
  console.log('获取短信验证码', res);
  return res;
}).catch(error => {
  console.log(error);
});

//手机号码关联
export const phoneBinding = (data) => post(`${API_ROOT}/api/buyer/wxlogin`, data)
.then(res => {
  console.log('手机号码关联', res);
  return res;
  // wx.switchTab({
  //   url: '/pages/home/home'
  // })
}).catch(error => {
  console.log(error);
});

//上传图片
export const uploadImage = (data) => post(`${API_ROOT}/upload2`, data)
.then(res => {
  console.log('上传图片', res);
  return res;
}).catch(err => {
  console.log(err);
  return err;
});
