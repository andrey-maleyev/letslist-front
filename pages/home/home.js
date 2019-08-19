import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  goToCreate: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/create/create',
      })
    }, 700);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {


    if (app.globalData.userInfo) {
      console.log("home.js onLoad #1")
      console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      this.showMyEvents()
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        console.log("home.js onLoad #2")
        console.log(res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        this.showMyEvents()
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          console.log("home.js onLoad #3")
          console.log(res.userInfo)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          this.showMyEvents()
        }
      })
    }

    // // SHOW MY EVENTS
    // const page = this
    // const userId = app.globalData.user.id
    // console.log(userId)
    // const myEventOptions = {
    //   userId,
    //   success: function (res) {
    //     const myEvents = res.data.participants
    //     page.setData({
    //       myEvents
    //     })
    //   },
    //   fail: function (err) {
    //     console.log(err)
    //   }
    // }

    // apiClient.getMyEvents(myEventOptions)
    // // END
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

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo

    // update user nickname in db
    const nickName = app.globalData.userInfo.nickName
    const id = app.globalData.user.id
    console.log("nickname: " + nickName)
    console.log("user.id: " + id)

    const options = {
      id,
      data: {
        "user": { "nickname": nickName }
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.updateUser(options)
    // END

    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  showMyEvents: function () {
    const page = this
    const userId = app.globalData.user.id
    console.log(userId)
    const myEventOptions = {
      userId,
      success: function (res) {
        const myEvents = res.data.participants
        page.setData({
          myEvents
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getMyEvents(myEventOptions)
  }
})
