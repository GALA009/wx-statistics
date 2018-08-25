//app.js
const util = require('./utils/util.js');
const service = require('./utils/service.js');
const serviceMy = require('./utils/service_my.js');
const serviceHome = require('./utils/service_home.js');

App({
  util: util,
  service: service,
  serviceMy: serviceMy,
  serviceHome: serviceHome,
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // this.login();
  },
  //获取登录位置
  getLocation: function () {
    var self = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        service.getLocaltion(res.latitude, res.longitude);
      },
      fail: function (res) {
        
      }
    })
  },
  /**
   * 授权
   * scope.userInfo	wx.getUserInfo	用户信息
      scope.userLocation	wx.getLocation, wx.chooseLocation	地理位置
      scope.address	wx.chooseAddress	通讯地址
      scope.invoiceTitle	wx.chooseInvoiceTitle	发票抬头
      scope.werun	wx.getWeRunData	微信运动步数
      scope.record	wx.startRecord	录音功能
      scope.writePhotosAlbum	wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum	保存到相册
      scope.camera		摄像头
   */
  checkAuthorize(scope) {
    let self = this;
    let code = self.globalData.code;

    wx.getSetting({
      success: (res) => {
        // 如果已授权用户信息
        if (res.authSetting["scope.userInfo"]) {
          // 已授权获取用户数据
          wx.getUserInfo({
            success: res => {
              //解密用户信息
              console.log('解密用户信息');
              service.getUserInfo(res.encryptedData, res.iv, code);
            },
            fail: res => {
              console.log('获取用户信息失败');
            }
          });

          // wx.switchTab({
          //   url: '../home/home',
          // });

          wx.reLaunch({
            url: '/pages/home/home',
          });
          

        } else {
          // 未授权跳转授权页面进行授权操作
          wx.reLaunch({
            url: '/pages/login/login?getUserInfoFail=1',
          });
        }
      }
    })
  },
  //登录
  login () {
    let self = this;

    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        var loginCountry = wx.getStorageSync('city'), // 读取缓存地址
          userInfo = wx.getStorageSync('userInfo'); // 读取缓存用户数据
        
        self.globalData.code = code;
        console.log('code', res.code);
        // wx.setStorageSync('code', code);
        console.log(loginCountry);

        // 如果是首次登陆，提示授权
        if (userInfo == '') {
          console.log('000');
          self.checkAuthorize();
        }
        else {
          console.log('1111');
          let data = {
            openId: userInfo.openId, // openid
            gender: userInfo.gender, // 性别 1男 2女
            nickname: userInfo.nickName, // 昵称
            headimgurl: userInfo.avatarUrl, // 头像url地址
            loginCountry: loginCountry, // 当前地址
            loginSource: 3, // 登录端 3小程序
          }
          service.loginCheck(data);
        }
      },
      fail: err => {
        console.log(err);
      }
    });
  },
  globalData: {
    code: null,
    userInfo: null,
    buyerInfo: null
  }
})