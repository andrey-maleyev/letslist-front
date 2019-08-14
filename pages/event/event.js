// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'Hamberger', value: '美国' },
      { name: 'Sandwich', value: '中国' },
      { name: 'Frog', value: '巴西' },
      { name: 'Beef', value: '日本' },
      { name: 'Rice', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    tools: [
      { name: 'Projector', value: '美国' },
      { name: 'Folders', value: '中国'},
      { name: 'Chargers', value: '巴西' },
      { name: 'Pen', value: '日本' },
      { name: 'Books', value: '英国' },
      { name: 'Gifts', value: '法国' },
    ],
    beverage: [
      { name: 'Cola', value: '美国' },
      { name: 'Sevenup', value: '中国' },
      { name: 'Milk', value: '巴西' },
      { name: 'Water', value: '日本' },
      { name: 'Redbull', value: '英国' },
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