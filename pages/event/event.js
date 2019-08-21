import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({

  data: {
  },

  // Lifecycle function--Called when page load
  onLoad: function (options) {
    const page = this
    const { event_id, participant_id } = options

    this.setData({
      participant_id,
      event_id
    })

    page.showEvent(event_id)
  },

  clickPrice: function (e) {
    console.log(e)
    let inputPrice = true
    this.setData({
      inputPrice
    })
  },

  handlePrice: function (e) {
    console.log(e)
    const page = this

    const value = e.detail.value
    const oldData = page.data
    console.log(e)

    oldData.price = value
    page.setData({
      ...oldData
    })
  },

  showPrice: function () {
    let inputPrice = false
    this.setData({
      inputPrice
    })

  },

  //Lifecycle function--Called when page is initially rendered
  goToList: function () {
    wx.navigateTo({
      url: `/pages/list/list`
    })
  },
  onReady: function () {

  },
  
  goToHome: function () {
    wx.navigateTo({
      url: '/pages/home/home',
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
  onShareAppMessage: function (ops) {
    // if (ops.from === 'button') {
    //   console.log(ops.target)
    // }

    // console.log("onShare, event_id: ", app.globalData.event)
    const event_id = app.globalData.event.id

    return {
      title: 'Letslist',
      imageUrl: 'http://lc-7tihnc4y.cn-n1.lcfile.com/ee0dc5a15af47785a8bf/landing.jpeg',
      path:`/pages/index/index?event_id=${event_id}`,
      success: function (res) {
        console.log(res);
      },
      fail: function (err) {
        console.log(err)
      }
    }
  },

  showEvent: function (event_id) {
    const page = this

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
  },

  goToItems: function () {
    wx.navigateTo({
      url: '/pages/items/items',
    })

  },

  clickNotTakenItem: function (clickEvent) {
    const not_taken_items = app.globalData.event.not_taken_items
    const index = clickEvent.currentTarget.dataset.index
    // console.log("not_taken_items[index]", not_taken_items[index])
    const events_item_id = not_taken_items[index].events_item_id
    this.addItemToPersonalList(events_item_id)
  },

  clickTakenItem: function (clickEvent) {
    const participant_id = clickEvent.currentTarget.dataset.participantid
    const events_item_id = clickEvent.currentTarget.dataset.eventsitemid
    // const index = clickEvent.currentTarget.dataset.index

    const options = { participant_id, events_item_id }
    // console.log("111111111111111", clickEvent)
    // console.log("2222222222222", clickEvent)
    this.deleteItemFromPersonalList(options)
  },

  addItemToPersonalList: function (events_item_id) {
    const page = this
    const participant_id = page.data.participant_id

    const getOptions = {
      participant_id,
      events_item_id,
      success: function (res) {
        console.log("addItemToPersonalList", res)
        page.showEvent(page.data.event_id)
      },
      fail: function (err) {
        console.log("addItemToPersonalList", err)
      }
    }

    apiClient.createItemInPersonalList(getOptions)

  },

  deleteItemFromPersonalList: function (options) {
    const page = this
    // console.log("event.js line 192", options.participant_id)
    const participant_id = options.participant_id
    const events_item_id = options.events_item_id

    const getOptions = {
      participant_id,
      events_item_id,
      success: function (res) {
        console.log("addItemToPersonalList", res)
        page.showEvent(page.data.event_id)
      },
      fail: function (err) {
        console.log("addItemToPersonalList", err)
      }
    }

    apiClient.deleteItemFromPersonalList(getOptions)
  }
})