const baseUrl = "https://letslist.wogengapp.cn/api/v1/"

const getMyEvents = options => {
  const { success, fail } = options

  return wx.request({
    url: baseUrl + "users/1/participants",
    method: "get",
    success,
    fail
  })
}

const createEvent = options => {
  const { data, success, fail } = options

  return wx.request({
    url: baseUrl + 'events',
    method: "post",
    data,
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
 
const updateUser = options => {
  const { id, data, success, fail } = options

  return wx.request({
    url: baseUrl + `login/${id}`,
    method: "put",
    data,
    success,
    fail
  })
}

export default {
  getMyEvents,
  createEvent,
  getItems,
  updateUser
}
