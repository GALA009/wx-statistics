/* jshint esversion: 6 */ 

var app = getApp();

/**
 * 此文件管理项目所有接口
 */
import { get, post, put, del } from './network';
import { API_ROOT } from './service';

//首页头部
export const getBuyerHead = (data) => get(`${API_ROOT}/api/circle/base/head`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('首页头部', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

//首页列表综合数据
export const getBuyerIndex = (data) => get(`${API_ROOT}/api/circle/base/index`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('首页列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});


//首页获取笔记/视频动态
export const postCircleList = (data) => post(`${API_ROOT}/api/circle/dynamic/list`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('首页获取笔记/视频动态', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

//首页推荐买手
export const postSellerToplist = (data) => post(`${API_ROOT}/api/seller/topList`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('首页推荐买手', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

//搜索买手
export const postSellerList = (data) => post(`${API_ROOT}/api/seller/list`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('首页推荐买手', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 买手个人信息
export const getSellerInfo = (data) => get(`${API_ROOT}/api/seller/getInfo`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('买手个人信息', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 买手详情直播录像
export const getLiveMylive = (data) => get(`${API_ROOT}/api/live/myLiveVideo`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('买手详情直播录像', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 关注买手
export const postFocusAdd = (data) => post(`${API_ROOT}/api/circle/focus/add`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('关注买手', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 取消关注买手
export const postFocusCancel = (data) => post(`${API_ROOT}/api/circle/focus/cancel?toMemberType=` + data.toMemberType + '&toMemberRelationId=' + data.toMemberRelationId, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('取消关注', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});


// 获取行程列表
export const postTourListBuyer = (data) => post(`${API_ROOT}/api/product/tour/listBuyer`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('获取行程列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 获取行程详情
export const getTourReadDetail = (data) => get(`${API_ROOT}/api/product/tour/detail`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('获取行程详情', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});
// 首页运营广告
export const postAdList = (data) => post(`${API_ROOT}/api/ad/list`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('首页运营广告', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 搜索条件标签列表
export const getTagsList = (data) => get(`${API_ROOT}/api/circle/tags/list`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('搜索条件标签', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 地区接口
export const getRegionTreeList = (data) => post(`${API_ROOT}/api/circle/region/treeList`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('地区接口', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});
// 商品列表
export const postProductList = (data) => post(`${API_ROOT}/api/product/list`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('商品列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 获取商品类目
export const getCategoryReadList = (data) => get(`${API_ROOT}/api/product/category/read/list`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('获取商品类目', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 商品详情
export const getProductDetail = (data) => get(`${API_ROOT}/api/product/detail`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('商品详情', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 商品属性
export const getProductAttrs = (data) => get(`${API_ROOT}/api/product/attrs`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('商品属性', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 商品sku组合
export const getProductSkus = (data) => get(`${API_ROOT}/api/product/skus`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('商品sku组合', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 商品详情评价列表
export const postProductProductEvaluateList = (data) => post(`${API_ROOT}/api/circle/productEvaluate/product/list`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('商品详情评价列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});


// 订单结算
export const getOrderCreateOrders = (data) => post(`${API_ROOT}/api/order/buyer/createOrders`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('订单结算', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 消息中心--点赞列表
export const getPraiseMyList = (data) => get(`${API_ROOT}/api/circle/praise/myList`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('点赞列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

// 消息中心--评论列表
export const getCommentMyList = (data) => get(`${API_ROOT}/api/circle/comment/myList`, data,{
  sessid: wx.getStorageSync('buyerInfo').sessid
}).then(res => {
  console.log('评论列表', res);
  return res;
}).catch(error => {
  console.log(error);
  return error;
});

