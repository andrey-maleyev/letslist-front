const app = getApp()
import apiClient from "../../utils/apiClient.js"


Page({

  data: {
  },

  // Lifecycle function--Called when page load
  onLoad: function (options) {
    console.log("line 10", app.globalData)
    this.setData({
      eventName: app.globalData.eventName
    })
    this.showEvent (options) 
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

  },

  showEvent: function () {
    const page = this

    // const EventId = app.globalData.user.id
    // console.log(userId)
    // const myEventOptions = {
    //   userId,
    //   success: function (res) {
    //     const myEvents = res.data.participants
    //     page.setData({
    //       myEvents
    //     })
    //   },
    //   fail: function (err) {
    //     console.log(err)
    //   }
    // }

    // apiClient.getMyEvents(myEventOptions)
  }
})
// Page({

//   Page initial data
