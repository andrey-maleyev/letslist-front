import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chosen_items: [ ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const page = this

    const options = {
      success: function (res) {
        console.log(res)
        const myItems = res.data.items
        let items_array = []
        myItems.forEach(function(item){
          item.clicked = false
          items_array.push(item)
        })
        console.log(myItems)
        page.setData({
          enriched_items: items_array
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getItems(options)

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
  clickItem: function (event) {
    const page = this 
    const enriched_items = page.data.enriched_items
    // console.log(enriched_items)
    const chosen_item = event.currentTarget.dataset.name
    // console.log(event)
    let index = event.currentTarget.dataset.index
    enriched_items[index].clicked = !enriched_items[index].clicked
    page.setData({enriched_items: enriched_items})
  },
  /**
   * 页面上拉触底事件的处理函数
   */

  submitEventItems: function () {
    const page = this
    let chosen_items = page.data.chosen_items
    const enriched_items = page.data.enriched_items
    console.log(enriched_items)
    enriched_items.forEach(function (x) {
      let chosen_items = page.data.chosen_items
      if (x.clicked === true) {
        chosen_items.push(x);
      }
   })
   
    console.log("chosen items: ", chosen_items)
    console.log("event", app.globalData.event)
    const event_id = app.globalData.event.id

    chosen_items.forEach(function (x) {
      const item_id = x.id

      const options = {
        event_id,
        item_id,
        success: function (res) {

        },
        fail: function (err) {
          console.log(err)
        }
      }

      apiClient.createEventItems(options)
    })

    console.log("event_id: ", app.globalData.event.id)
    wx.navigateTo({
      url: `/pages/event/event?event_id=${event_id}`
    })
  },


  //   const options = {
  //     data: {
  //       event: newEvent
  //     },
  //     success: function (res) {
  //       // Saving event id/ item id
  //       app.globalData.eventId = res.data.event.id
  //       app.globalData.eventName = res.data.event.name

  //       wx.navigateTo({
  //         url: '/pages/event/event',
  //       })
  //     },
  //     fail: function (err) {
  //       console.log(err)
  //     }
  //   }

  //   apiClient.addEventItems(options)
  // }







  // },

  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})