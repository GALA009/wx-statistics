// pages/login/register/register.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnState: true,
    phone: '',
    code: '',
    time: '获取验证码', //倒计时
    currentTime: 60,
    disabled: false,
  },
  //编辑手机号码
  editPhone: function() {
    wx.navigateBack()
  },
  //获取短信验证码
  getCode: function () {
    
    let that = this;
    let currentTime = that.data.currentTime;
    let userInfo = wx.getStorageSync('userInfo'),
        loginCountry = wx.getStorageSync('city');
    let loginSource = 3;
    let _data = {
      openId: userInfo.openId,
      loginCountry: loginCountry,
      loginSource: loginSource,
      mobile: that.data.phone
    }

    app.service.getCode(_data)
      .then( res => {
        if(res.serveCode == 600) {
          var interval = setInterval(function () {
            currentTime--;
            that.setData({
              time: currentTime + '秒'
            })
            if (currentTime <= 0) {
              clearInterval(interval)
              that.setData({
                time: '重新发送',
                currentTime: 60,
                disabled: false
              })
            }
          }, 1000)
        }
        else if(res.code == 200 && res.serveCode == undefined){
          console.log(res.data);
          wx.setStorageSync('buyerInfo', res.data);
          wx.reLaunch({
            url: '/pages/home/home',
          });
        }
      })
      .catch( err => {
        console.log(err);
      });

  },
  getVerificationCode() {
    var phone = this.data.phone;
    
    this.getCode();
    this.setData({
      disabled: true
    })
  },
  // 获取输入验证码 
  codeInput: function (e) {
    this.setData({
      code: e.detail.value
    });
    if(this.isCode(this.data.code)){
      this.setData({
        btnState: false
      })
    }else{
      this.setData({
        btnState: true
      })
    }
  }, 
  //检查短信验证码
  isCode: function (code) {
    var patrn = /^\d{6}$/;
    if (!patrn.exec(code)) {
      return false;
    } else {
      return true;
    }
  },
  /**
   * 登录按钮
   */
  login: function() {
    let loginSource = 3;
    let userInfo = wx.getStorageSync('userInfo'),
      loginCountry = wx.getStorageSync('city');

    let _data = {
      openId: userInfo.openId,
      loginCountry: loginCountry,
      mobile: this.data.phone,
      loginSource: loginSource,
      smsCode: this.data.code
    }

    app.service.phoneBinding(_data)
      .then( res => {
        if(res.code == 200 && res.serveCode == undefined) {
          wx.setStorageSync('buyerInfo', res.data);
          wx.reLaunch({
            url: '/pages/home/home',
          });
        }
      })
      .catch( err => {
        console.log(err);
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      phone: options.phone
    });
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