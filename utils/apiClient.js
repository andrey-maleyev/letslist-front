// const baseUrl = "https://letslist.wogengapp.cn/api/v1/"
const baseUrl = "http://localhost:3000/api/v1/"

const getMyEvents = options => {
  const { userId, success, fail } = options

  return wx.request({
    url: baseUrl + `users/${userId}/participants`,
    method: "get",
    success,
    fail
  })
}
const showEvent = options => {
  const { userId, success, fail } = options
  return wx.request({
    url: baseUrl + `events/${id}`,
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

const createEventItems = options => {
  const { success, fail } = options

  return wx.request({
    url: baseUrl + "events/${eventId}/items",
    method: "post",
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
