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

const getEvent = options => {
  const { event_id, success, fail } = options

  return wx.request({
    url: baseUrl + `events/${event_id}`,
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

const createParticipant = options => {
  const { data, success, fail } = options

  return wx.request({
    url: baseUrl + 'participants',
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
  const { event_id, item_id, success, fail } = options

  return wx.request({
    url: baseUrl + `events/${event_id}/items/${item_id}`,
    method: "post",
    success,
    fail
  })
}

const createItemInPersonalList = options => {
  const { participant_id, events_item_id, success, fail } = options

  return wx.request({
    url: baseUrl + `participants/${participant_id}/eventsitems/${events_item_id}`,
    method: "post",
    success,
    fail
  })
}

const deleteItemFromPersonalList = options => {
  const { participant_id, events_item_id, success, fail } = options

  return wx.request({
    url: baseUrl + `participants/${participant_id}/eventsitems/${events_item_id}`,
    method: "delete",
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

const updateExpense = options => {
  const { participant_id, data, success, fail } = options

  return wx.request({
    url: baseUrl + `participants/${participant_id}`,
    method: "put",
    data,
    success,
    fail
  })
}

const createItem = options => {
  const { data, success, fail } = options

  console.log("apiClient", data)

  return wx.request({
    url: baseUrl + 'items',
    method: "post",
    data,
    success,
    fail
  })
}

export default {
  getMyEvents,
  getEvent,
  createEvent,
  createParticipant,
  getItems,
  createEventItems,
  updateUser,
  createItemInPersonalList,
  deleteItemFromPersonalList,
  updateExpense,
  createItem
}
