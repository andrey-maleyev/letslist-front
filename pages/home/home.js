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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {

    // temp
    const event_id = app.globalData.event_id

    this.setData({
      event_id
    })
    // end temp

    // this.createParticipant()

    if (app.globalData.userInfo) {
      console.log("home.js > onLoad #1 > app.globalData.userInfo:", app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      if (event_id) {
        console.log("shared event_id: ", event_id)
        this.createParticipant()
      } else {
        console.log("no shared event id")
        this.showMyEvents()
      }
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        console.log("home.js > onLoad #2 > res.userInfo", res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        if (event_id) {
          console.log("shared event_id: ", event_id)
          this.createParticipant()
        } else {
          console.log("no shared event id")
          this.showMyEvents()
        }
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
          if (event_id) {
            console.log("shared event_id: ", event_id)
            this.createParticipant()
          } else {
            console.log("no shared event id")
            this.showMyEvents()
          }
        }
      })
    }
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

    // update user nickname and avatar in db
    const nickName = app.globalData.userInfo.nickName
    const avatarUrl = app.globalData.userInfo.avatarUrl
    const id = app.globalData.user.id
    console.log("nickname: " + nickName)
    console.log("user.id: " + id)

    const options = {
      id,
      data: {
        "user": {
          "nickname": nickName,
          "avatar": avatarUrl
        }
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
    const myEventOptions = {
      userId,
      success: function (res) {
        const myEvents = res.data.participants
        console.log("home.js > showMyEvents:", myEvents)
        page.setData({
          myEvents
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getMyEvents(myEventOptions)
  },

  createParticipant: function () {
    const page = this

    // const event_id = app.globalData.event_id
    const user_id = app.globalData.user.id
    const event_id = app.globalData.event_id
    console.log("home.js > createParticipant > user_id", user_id)
    console.log("home.js > createParticipant > event_id", event_id)

    const options = {
      data: {
        participant: { user_id, event_id }
      },
      success: function (res) {
        console.log("home.js > createParticipant > res", res)
        page.showMyEvents()
      },
      fail: function (err) {
        console.log("home.js > createParticipant > err", err)
      }
    }

    apiClient.createParticipant(options)
  },

  handleClick: event => {
    // console.log(event)
    const event_id = event.currentTarget.dataset.eventid
    // console.log("home.js, event_id: ", event_id)

    wx.navigateTo({
      url: `/pages/event/event?event_id=${event_id}`
    })
  },

  goToCreate: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/create/create',
      })
    }, 700);
  }
})
