import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chosen_items: [ ],
    tempCustomItems: [ ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getDefaultItems()
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
    // console.log("event.js > clickItem > enriched_items", enriched_items)
    const chosen_item = event.currentTarget.dataset.name
    // console.log("event.js > clickItem > clickEvent > index", event.currentTarget.dataset.index)
    let index = event.currentTarget.dataset.index
    enriched_items[index].clicked = !enriched_items[index].clicked
    page.setData({enriched_items: enriched_items})
  },


  clickCustomItem: function (event) {
    const page = this
    const tempCustomItems = page.data.tempCustomItems
    let index = event.currentTarget.dataset.index
    tempCustomItems[index].clicked = !tempCustomItems[index].clicked
    page.setData({ tempCustomItems: tempCustomItems })
  },

  submitEventItems: function () {
    const page = this
    let chosen_items = page.data.chosen_items
    const enriched_items = page.data.enriched_items
    const tempCustomItems = page.data.tempCustomItems
    // console.log("items.js > submitEventItems > enriched_items:", enriched_items)
    enriched_items.forEach(function (x) {
      let chosen_items = page.data.chosen_items
      if (x.clicked === true) {
        chosen_items.push(x);
      }
    })

    tempCustomItems.forEach(function (x) {
      let chosen_items = page.data.chosen_items
      if (x.clicked === true) {
        chosen_items.push(x);
      }
    })
   
    console.log("items.js > submitEventItems > chosen items: ", chosen_items)
    const event_id = app.globalData.event_id
    const participant_id = app.globalData.participant_id

    chosen_items.forEach(function (x) {
      const item_id = x.id

      const options = {
        event_id,
        item_id,
        success: function (res) {
          console.log("107", res)
        },
        fail: function (err) {
          console.log(err)
        }
      }

      apiClient.createEventItems(options)
    })

    // console.log("event_id: ", app.globalData.event.id)
    wx.navigateBack({
      url: `/pages/event/event?event_id=${event_id}&participant_id=${participant_id}`
    })
  },

  getDefaultItems: function () {
    const page = this

    const options = {
      success: function (res) {
        // console.log(res)
        const myItems = res.data.items
        let items_array = []
        myItems.forEach(function (item) {
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

  addCustomItem: function (e) {
    let page = this
    // console.log("=====", e)
    if (e.detail.value.name) {
      const name = e.detail.value.name
      let custom_item = { name: name, clicked: true }
      let custom_items = this.data.tempCustomItems
      custom_items.push(custom_item)
      // console.log("tempCustomItems", this.data.tempCustomItems)
      this.setData({ tempCustomItems: custom_items })
      page.createCustomItem(name)
      
    } else {
      wx.showToast({
        title: 'Input item!',
        icon: 'loading',
        duration: 1500
      })
    }
    

    // 
  },

  createCustomItem: function (name) {
    let page = this
    const getOptions = {
      data: {
        name
      },
      success: function (res) {
        console.log(res)
        let created_item = res.data
        created_item.clicked = true
        let new_custom_items = page.data.tempCustomItems
        new_custom_items[new_custom_items.length - 1] = created_item
        page.setData({ tempCustomItems: new_custom_items })
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.createItem(getOptions)
  }


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