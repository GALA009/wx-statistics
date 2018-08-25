// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getUserInfoFail: false,
    btnState: false,
    emptyBtn: false,
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,
    phone: ''
  },
  //手机区号
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  // 获取输入手机号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    });
    this.btnSate();
  },
  //清空当前输入的手机号码
  emptyBtn: function() {
    this.setData({
      phone: ''
    })
  },
  //按钮状态
  btnSate: function () {
    var phone = this.data.phone;
    if (this.validatemobile(phone)) {
      this.setData({
        btnState: false
      })
    } else {
      this.setData({
        btnState: true
      })
    }
  },
  //检查手机号码
  validatemobile: function (mobile) {
    if (mobile.length == 0) {
      this.setData({
        emptyBtn: false
      })
      return false;
    }
    if (mobile.length > 0) {
      this.setData({
        emptyBtn: true
      })
    }
    if (mobile.length != 11) {
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
      return false;
    }
    return true;
  },
  //下一步
  next: function() {
    let that = this;
    // var userInfo = wx.getStorageSync('userInfo'),
    //     loginCountry = wx.getStorageSync('city');
    // var loginSource = 3;
    // let _data = {
    //   openId: userInfo.openId,
    //   loginCountry: loginCountry,
    //   loginSource: loginSource,
    //   mobile: that.data.phone
    // }

    // app.service.getCode(_data)
    //   .then( res => {
    //     if(res.code == 200) {
    //       wx.reLaunch({
    //         url: '/pages/home/home',
    //       });
    //     }
    //     else {
    //       wx.navigateTo({
    //         url: '/pages/login/register/register?phone=' + that.data.phone
    //       })
    //     }
    //   })
    //   .catch( err => {
    //     console.log(err);
    //   });

      wx.navigateTo({
        url: '/pages/login/register/register?phone=' + that.data.phone
      })

  },
  //获取用户信息
  onGotUserInfo: function (e) {
    let code = app.globalData.code;
    // 微信授权
    wx.authorize({
      scope: 'scope.userInfo',
      success() {
        wx.getUserInfo({
          success: res => {
            //解密用户信息
            app.service.getUserInfo(res.encryptedData, res.iv, code);
          },
          fail: res => {
            console.log('获取用户信息失败');
          }
        })

        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
      },
      fail: err => {
        console.log(err);
      }
    })

    // app.login();

    this.setData({
      getUserInfoFail: false
    })

  },
  //获取微信绑定手机号
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      getUserInfoFail: options.getUserInfoFail==1 ? true:false
    });
    app.getLocation();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})