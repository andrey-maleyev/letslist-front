const app = getApp()

Page ({

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
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      console.log(ops.target)
    }

    return {
      title: 'letslist',
      imageUrl: 'https://media.giphy.com/media/lf9PrYyjFOQta/giphy.gif',
      path:`/pages/index/index?event_id=${event_id}`,// 用户点击首先进入的当前页面
      success: function (res) {
        console.log("转发成功:");
      },
      fail: function (res) {
        console.log("转发失败:");
      }
    }
  }
})