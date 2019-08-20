import apiClient from "../../utils/apiClient.js"
const app = getApp()

// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['Birthday', 'Picnic', 'Conference', 'Others'],
    objectArray: [
      {
        id: 0,
        name: 'Birthday'
      },
      {
        id: 1,
        name: 'Picnic'
      },
      {
        id: 2,
        name: 'Conference'
      },
      {
        id: 3,
        name: 'Others'
      }
    ],

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindDateChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  handleEventNameInput: function (e) {
    const newEvent = this.data.newEvent || {}
    newEvent.name = e.detail.value;

    this.setData({
      newEvent
    })
  },

  // handleEventDescriptionInput: function (e) {
  //   const value = e.detail.value;
  //   const newEvent = this.data.newEvent || {}
  //   newEvent.description = value

  //   this.setData({
  //     newEvent
  //   })
  // },

  submitEvent: function () {

    const newEvent = this.data.newEvent
    newEvent.date = this.data.date + ' ' + this.data.time
    newEvent.userId = app.globalData.user.id

    console.log(newEvent)

    const options = {
      data: {
        event: newEvent
      },
      success: function (res) {
        // Saving event ID
        // app.globalData.eventId = res.data.event.id
        // app.globalData.eventName = res.data.event.name
        app.globalData.event = res.data.event
        console.log("event id line 145", res.data.event.id)

        const event_id = res.data.event.id

        wx.navigateTo({
          url: `/pages/event/event?event_id=${event_id}`
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.createEvent(options)
  }
})