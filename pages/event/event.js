import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({

  data: {
  },

  // Lifecycle function--Called when page load
  onLoad: function (options) {
    let { event_id, participant_id } = options

    app.globalData.event_id = event_id
    app.globalData.participant_id = participant_id
  },

  //Lifecycle function--Called when page is initially rendered
  onReady: function () {

  },

  // Lifecycle function--Called when page show
  onShow: function () {
    const page = this
    let event_id = app.globalData.event_id
    let participant_id = app.globalData.participant_id
    
    // console.log("======= event_id", event_id)
    // console.log("======= participant_id", participant_id)
    // console.log("=======  app.globalData", app.globalData)

    this.setData({
      participant_id,
      event_id
    })

    page.showEvent(event_id)
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
    const event_id = this.data.event.id
    const event_name = this.data.event.name

    return {
      title: "You're invited to " + event_name,
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
        event.participants.map(function(par) {
          par.input_clicked = false
          return par
        })
        page.setData({
          event
        })
        if (event.participants_count === 1) {
          const participant_id = event.participants[0].participant_id
          app.globalData.participant_id = participant_id
          page.setData({
            participant_id
          })
        }
      },
      fail: function (err) {
        console.log("event.js > showEvent", err)
      }
    }

    apiClient.getEvent(getOptions)
  },

  clickNotTakenItem: function (clickEvent) {
    const not_taken_items = this.data.event.not_taken_items
    const index = clickEvent.currentTarget.dataset.index
    const events_item_id = not_taken_items[index].events_item_id
    this.addItemToPersonalList(events_item_id)
  },

  clickTakenItem: function (clickEvent) {
    const participant_id = clickEvent.currentTarget.dataset.participantid
    const events_item_id = clickEvent.currentTarget.dataset.eventsitemid
    const options = { participant_id, events_item_id }
    this.removeItemFromPersonalList(options)
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

  removeItemFromPersonalList: function (options) {
    const page = this
    const participant_id = options.participant_id
    const events_item_id = options.events_item_id

    const getOptions = {
      participant_id,
      events_item_id,
      success: function (res) {
        console.log("removeItemFromPersonalList", res)
        page.showEvent(page.data.event_id)
      },
      fail: function (err) {
        console.log("removeItemFromPersonalList", err)
      }
    }

    apiClient.deleteItemFromPersonalList(getOptions)
  },

  clickPrice: function (e) {
    let page = this
    let index = e.currentTarget.dataset.index
    let event = page.data.event
    event.participants[index].input_clicked = true
    this.setData({
      event: event
    })
  },

  showPrice: function (e) {
    // console.log(e)
    let page = this
    let expenses = e.detail.value.expenses
    let index = e.detail.target.dataset.index
    let event = page.data.event
    const participant_id = event.participants[index].participant_id
    event.participants[index].expenses = expenses
    event.participants[index].input_clicked = false
    this.setData({
      event: event
    })

    const getOptions = {
      participant_id,
      data: {
        "participant": { "expenses": expenses }
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.updateExpense(getOptions)
  },

  goToList: function () {
    const event_id = this.data.event.id
    wx.navigateTo({
      url: `/pages/list/list?event_id=${event_id}`
    })
  },

  goToItems: function () {
    wx.navigateTo({
      url: '/pages/items/items',
    })
  },

  goToHome: function () {
    wx.reLaunch({
      url: '/pages/home/home',
    })
  }
})