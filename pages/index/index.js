//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'LETSLIST',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {

    const { event_id } = options
    app.globalData.event_id = event_id

    if (app.globalData.userInfo) {
      console.log("index.js line 20")
      console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log("index.js line 30")
        console.log(res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          console.log("index.js line 42")
          console.log(res.userInfo)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  goToHome: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/home/home',
      })
    }, 1000);
  },
  getUserInfo: function(e) {
    console.log("getUserInfo function(e), line 60")
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
