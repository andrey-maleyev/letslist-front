// pages/items/items.js
import apiClient from "../../utils/apiClient.js"

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
    
    // chosen_items.push(chosen_item) 
    // console.log(chosen_items)
    // page.setData({
    //   chosen_items
    // }, () => {
    //   console.log(page.data.chosen_items)
    // })
  },
  /**
   * 页面上拉触底事件的处理函数
   */

  submitItems: function () {
    const page = this
    let chosen_items = page.data.chosen_items
    const enriched_items = page.data.enriched_items
    console.log(enriched_items)
     enriched_items.forEach(function (x) {
      let chosen_items = page.data.chosen_items
      if (x.clicked === true) {
      chosen_items.push(x.name);
      }
   })
   console.log(chosen_items)
  }
    // chosen_items.push(chosen_item)


  //   if (condition) {
  //     //  block of code to be executed if the condition is true
  //   } else {
  //     //  block of code to be executed if the condition is false
  //   }
  //   console.log(chosen_item)

  // },

  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})