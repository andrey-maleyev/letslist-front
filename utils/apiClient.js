const baseUrl = "http://localhost:3000/api/v1/"

const getMyEvents = options => {
  const { success, fail } = options

  return wx.request({
    url: baseUrl + "users/31/participants",
    method: "get",
    success,
    fail
  })
}

export default {
  getMyEvents
}