const app = getApp()

Page({

  data: {
  },

  // Lifecycle function--Called when page load
  onLoad: function (options) {

    this.setData({
      eventName: app.globalData.eventName
    })
  },

  addItems: function () {
      wx.navigateTo({
        url: '/pages/items/items',
      })

  },

  //Lifecycle function--Called when page is initially rendered

  onReady: function () {

  },

  clickPrice: function (e) {
    console.log(e)
    const a = true
    this.setData ({
      a
    })
  },

  // back: function () {
  //   wx.navigateTo({
  //     url: '/pages/home/home',
  //   })

  // },

  // Lifecycle function--Called when page show
  onShow: function () {

  },

  // Lifecycle function--Called when page hide

  onHide: function () {

  },

  //Lifecycle function--Called when page unload
  onUnload: function () {

  },

  // Page event handler function--Called when user drop down

  onPullDownRefresh: function () {

  },


  // Called when page reach bottom

  onReachBottom: function () {

  },


  // Called when user click on the top right corner to share

  onShareAppMessage: function () {

  }
})
// Page({

//   Page initial data
