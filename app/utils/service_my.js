/* jshint esversion: 6 */ 

var app = getApp();

/**
 * 此文件管理项目所有接口
 */
import { get, post, put, del } from './network';
import { API_ROOT } from './service';

//获取买家个人信息
export const getBuyerInfo = () => get(`${API_ROOT}/api/buyer/getInfo`, {}, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('买家个人信息', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 修改个人信息
export const postBuyserUpdateInfo = (data) => post(`${API_ROOT}/api/buyer/updateInfo`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('修改个人信息', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});


//获取买家地址列表
export const getBuyerAddressList = () => get(`${API_ROOT}/api/buyer/address/list`, {}, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('买家地址列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});


//保存地址
export const postBuyserAddressSave = (data) => post(`${API_ROOT}/api/buyer/address/save`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('保存地址', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

//删除地址
export const postBuyerAddressDel = (data) => post(`${API_ROOT}/api/buyer/address/del?id=` + data.id, JSON.stringify(data), {
  'sessid': wx.getStorageSync('buyerInfo').sessid,
  // 'content-type': 'application/x-www-form-urlencoded'
}).then(res => {
  console.log('删除地址', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

//地址详情
export const getBuyerAddressDetail = (data) => get(`${API_ROOT}/api/buyer/address/detail`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('地址详情', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

//设置默认地址
export const postBuyerAddressDefault = (data) => post(`${API_ROOT}/api/buyer/address/default?id=` + data.id, JSON.stringify(data), {
  'sessid': wx.getStorageSync('buyerInfo').sessid,
}).then(res => {
  console.log('默认地址设置', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 订单列表
export const postBuyerOrderList = (data) => post(`${API_ROOT}/api/order/common/list`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('订单列表', res);
  return res;
}).catch(error => {
  
  console.log(error);
  return error;
});

// 支付订单
export const postBuyerOrderTopay = (data) => post(`${API_ROOT}/api/order/buyer/toPay`, data, {
  sessid:  wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('支付订单', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 取消订单
export const postBuyerOrderCancel = (data) => post(`${API_ROOT}/api/order/buyer/cancel`, data, {
  sessid:  wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('取消订单', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 删除订单
export const postBuyerOrderDetele = (data) => post(`${API_ROOT}/api/order/common/delete`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('删除订单', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});


// 获取售后订单列表
export const postBuyerOrderAfterSale = (data) => post(`${API_ROOT}/api/order/common/listAfterSale`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('获取售后订单', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});


// 申请售后订单
export const postBuyerAfterSale = (data) => post(`${API_ROOT}/api/order/buyer/afterSale`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('申请售后', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});


// 获取订单详情
export const getBuyerOrderDetail = (data) => get(`${API_ROOT}/api/order/common/detail`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('获取订单详情', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 提醒买手发货
export const getBuyerOrderRemind = (data) => get(`${API_ROOT}/api/order/buyer/remind`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('提醒买手发货', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 确认收货
export const postBuyerOrderConfirmReceive = (data) => post(`${API_ROOT}/api/order/buyer/confirmReceive`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('确认收货', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 添加评论
export const postOrderEvaluateAdd = (data) => post(`${API_ROOT}/api/circle/orderEvaluate/add`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('添加评论', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 根据物流单号获取快递公司
export const getBuyerExpressCompany = (data) => get(`${API_ROOT}/api/order/express/company`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('根据物流单号获取快递公司', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 获取快递公司列表
export const getBuyerExpressList = (data) => get(`${API_ROOT}/api/order/express/list`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('获取快递公司列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 查询物流信息
export const getBuyerExpressQuery = (data) => get(`${API_ROOT}/api/order/express/query`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('查询物流信息', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 获取我的收藏列表
export const getFavoritesMyList = (data) => get(`${API_ROOT}/api/circle/favorites/myList`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('获取我的收藏列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 批量取消收藏
export const postFavoritesBatchCancel = (data) => post(`${API_ROOT}/api/circle/favorites/batchCancel`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('批量取消收藏', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 收藏/取消收藏
export const postFavoritesUpdate = (data) => post(`${API_ROOT}/api/circle/favorites/update`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('收藏/取消收藏', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 获取我的关注列表
export const postFocusList = (data) => post(`${API_ROOT}/api/circle/focus/list`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('关注列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 获取我的需求列表
export const getDemandList = (data) => get(`${API_ROOT}/api/demand/list`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('需求列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 我的需求-详情
export const getDemandDetail = (data) => get(`${API_ROOT}/api/demand/detail`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('需求详情', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 我的需求-删除需求
export const postDeleteDemand = (data) => post(`${API_ROOT}/api/demand/userDeleteDemand`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('需求删除', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 我的需求-取消需求
export const postCancelDemand = (data) => post(`${API_ROOT}/api/demand/cancelDemand`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('取消需求', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 我的需求-接单人列表
export const getDemandAcceptorInfoList = (data) => get(`${API_ROOT}/api/demand/acceptorInfoList`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('接单人列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 我的需求-指定接单人
export const postDemandCreateOrder = (data) => post(`${API_ROOT}/api/demand/createOrder`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('指定接单人', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 我的评价列表
export const postProductEvaluateList = (data) => post(`${API_ROOT}/api/circle/productEvaluate/list`, data, {
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('评价列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});



