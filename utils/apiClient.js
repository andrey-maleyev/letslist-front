const baseUrl = "http://letslist.wogengapp.cn/api/v1/"

const getMyEvents = options => {
  const { success, fail } = options

  return wx.request({
    url: baseUrl + "users/1/participants",
    method: "get",
    success,
    fail
  })
}

const getItems = options => {
  const { success, fail } = options

  return wx.request({
    url: baseUrl + "items",
    method: "get",
    success,
    fail
  })
}

export default {
  getMyEvents,
  getItems
}
