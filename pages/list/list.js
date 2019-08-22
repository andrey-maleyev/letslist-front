// pages/list/list.js
import apiClient from "../../utils/apiClient.js"
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
  


  },

  // event.participants.map(function (par) {
  //   par.input_clicked = false
  //   return par
  // })


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let { event_id } = options

    this.showEvent(event_id)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    const page = this
    setTimeout(function(e){
      
      const add = (a, b) => a + b
      // const sum = numbers.reduce(add)
      let totalExpensesArray = []
      // let participants = page.data.participants
      let totalExpenses = 0

      page.data.participants.map(function (par) {
        totalExpensesArray.push(par.expenses)

        // console.log(totalExpenses)
        // return totalExpenses
      })
      totalExpenses = totalExpensesArray.reduce(add)
      let totalParticipants = page.data.totalParticipants
      // console.log(totalParticipants)
      let averageExpense = (totalExpenses / totalParticipants).toFixed(2)
      console.log(averageExpense)
      let moneyBalance = []
      page.data.participants.map(function (par) {
        moneyBalance.push(par.expenses - averageExpense)
        // console.log(totalExpenses)
        // return totalExpenses
      })

      page.setData({
        totalExpenses,
        totalParticipants,
        averageExpense,
        moneyBalance
      })
    }, 1000)
    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1000
    })
    
  },

  showEvent: function (event_id) {
    const page = this

    const getOptions = {
      event_id,
      success: function (res) {
        console.log("1000000", res)
       let participants = res.data.event.participants
        const totalParticipants = res.data.event.participants_count
        // const expenses = res.data.event.participants.expenses


       page.setData({
          participants,
         totalParticipants
       })
        
        // const event = res.data.event
        // event.participants.map(function (par) {
        //   par.input_clicked = false
        //   return par
        // })
        // page.setData({
        //   event
        // })
        // if (event.participants_count === 1) {
        //   const participant_id = event.participants[0].participant_id
        //   app.globalData.participant_id = participant_id
        //   page.setData({
        //     participant_id
        //   })
        },
      fail: function(err) {
        console.log("event.js > showEvent", err)
      }
    }

    apiClient.getEvent(getOptions)
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