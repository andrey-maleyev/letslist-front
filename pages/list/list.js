// pages/list/list.js
import apiClient from "../../utils/apiClient.js"
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    participants: [{ nickName: "Maggie", expenses: 123, avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKe1gFtBR1ia3jpq2sUFthqrpppMjVbWIhDQBFektJGicVIfapiaEYzw5Z6RDcN6ibIHGAHgkTjwkeiaiaA/132" }, { nickName: "Andrey", expenses: 56, avatar: "https://wx.qlogo.cn/mmopen/vi_32/UFLKFwTp3TEE1YJLk5cCcNMSYibKjDeTgOrgygbM52OZnYffdHwzEcakdlYibLzpGgdcyh9g2Z8hia3B5pgRGdvfw/132" }, { nickName: "Zoe", expenses: 63, avatar: "https://ca.slack-edge.com/T02NE0241-UKGDWU4D8-cae60da31f98-72" }, { nickName: "Zoe", expenses: 63, avatar: "https://ca.slack-edge.com/T02NE0241-UKGDWU4D8-cae60da31f98-72" }, { nickName: "Zoe", expenses: 63, avatar: "https://ca.slack-edge.com/T02NE0241-UKGDWU4D8-cae60da31f98-72" }, { nickName: "Zoe", expenses: 63, avatar: "https://ca.slack-edge.com/T02NE0241-UKGDWU4D8-cae60da31f98-72" }, { nickName: "Zoe", expenses: 63, avatar: "https://ca.slack-edge.com/T02NE0241-UKGDWU4D8-cae60da31f98-72" }, { nickName: "Zoe", expenses: 63, avatar: "https://ca.slack-edge.com/T02NE0241-UKGDWU4D8-cae60da31f98-72" } ],


  },

  // event.participants.map(function (par) {
  //   par.input_clicked = false
  //   return par
  // })


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this 
    const add = (a, b) => a + b
    // const sum = numbers.reduce(add)
    let totalExpensesArray = []
    let participants = page.data.participants
    let totalExpenses = 0
    participants.map(function (par) {
      totalExpensesArray.push(par.expenses)
      
      // console.log(totalExpenses)
      // return totalExpenses
    })
    totalExpenses = totalExpensesArray.reduce(add)
    let totalParticipants = participants.length
    // console.log(totalParticipants)
    let averageExpense = (totalExpenses / totalParticipants).toFixed(2)
    console.log(averageExpense)
    let moneyBalance = []
     participants.map(function (par) {
       moneyBalance.push((par.expenses - averageExpense).toFixed(2))
      // console.log(totalExpenses)
      // return totalExpenses
    })
    
    page.setData ({
      totalExpenses,
      totalParticipants,
      averageExpense,
      moneyBalance
   })
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

  goToHome:function () {
    wx.navigateTo({
      url: '/pages/home/home',
    })
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})

// goToHome: function () {
//   setTimeout(function () {
//     wx.navigateTo({
//       url: '/pages/index/index',
//     })
//   }, 700);
// }