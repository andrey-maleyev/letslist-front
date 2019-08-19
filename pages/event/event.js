import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({

  data: {
  },

  // Lifecycle function--Called when page load
  onLoad: function (options) {
    const page = this
    const { event_id } = options

    const getOptions = {
      event_id,
      success: function (res) {
        const event = res.data.event
        app.globalData.event = event
        console.log("event.js, event:", app.globalData.event)

        page.setData({
          event
        })


      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getEvent(getOptions)

    this.setData({
      event: app.globalData.event
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