// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'Hamburgers', value: '美国' },
      { name: 'Sandwiches', value: '中国' },
      { name: 'Cake', value: '巴西' },
      { name: 'Beef', value: '日本' },
      { name: 'Rice', value: '英国' },
      { name: 'Hotdogs', value: '英国' },
      { name: 'Pancake', value: '英国' },
      { name: 'Sausage rolls', value: '英国' },
      { name: 'French toast', value: '英国' },
      { name: 'Crispy potato chips', value: '英国'},
      { name: 'Chicken', value: '英国' }
    ],
    tools: [
      { name: 'Projector', value: '美国' },
      { name: 'Folders', value: '中国'},
      { name: 'Chargers', value: '巴西' },
      { name: 'Candels', value: '日本' },
      { name: 'Gifts', value: '英国' },
      { name: 'Balloons', value: '英国' },
      { name: 'Banners', value: '英国' },
      { name: 'Party blowers', value: '英国' },
      { name: 'Party hats', value: '英国' },
      { name: 'Confetti', value: '英国' },

    ],
    beverage: [
      { name: 'Cola', value: '美国' },
      { name: 'Seven Up', value: '中国' },
      { name: 'Milk', value: '巴西' },
      { name: 'Water', value: '日本' },
      { name: 'Coffee', value: '英国' },
      { name: 'Spirit', value: '英国' },
      { name: 'Green tea', value: '英国' },
      { name: 'Black tea', value: '英国' },
      { name: 'Juices', value: '英国' },
      { name: 'Soda', value: '英国' },
    ]


  },

 checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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

  }
})