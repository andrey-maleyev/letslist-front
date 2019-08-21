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

    // this.setData({
    //   event: app.globalData.event
    // })
  },

  addItems: function () {
      wx.navigateTo({
        url: '/pages/items/items',
      })

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

  onReady: function () {

  },
  
  goToHome: function () {
    wx.navigateTo({
      url: '/pages/home/home',
   })

  },
  // clickPrice: function (e) {
  //   console.log(e)
  //   const inputPrice = true
  //   this.setData ({
  //     inputPrice
  //   })
  // },

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
      imageUrl: 'https://media.giphy.com/media/lf9PrYyjFOQta/giphy.gif',
      path:`/pages/index/index?event_id=${event_id}`,
      success: function (res) {
        console.log(res);
      },
      fail: function (err) {
        console.log(err)
      }
    }
  }
})
