import apiClient from "../../utils/apiClient.js"

Page({

  /**
   * Page initial data
   */
  data: {

  },

  goToCreate: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/create/create',
      })
    }, 700);
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    const page = this

    const options = {
      success: function (res) {
        const myEvents = res.data.participants
        console.log(myEvents)
        page.setData({
          myEvents
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getMyEvents(options)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})