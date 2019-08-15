const baseUrl = "http://letslist.wogengapp.cn/api/v1/"

const getMyEvents = options => {
  const { success, fail } = options

  return wx.request({
    url: baseUrl + "users/6/participants",
    method: "get",
    success,
    fail
  })
}

export default {
  getMyEvents
}
