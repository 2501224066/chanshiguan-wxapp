var common = require('./request')

// 获取免登可看的日记列表
export function petDiaryInfoGetDiary(data, repair='') {
  return common.go({
    method: 'get',
    url: '/petDiary/info/getDiary' + repair,
    data: data
  })
}

// 获取日记详情
export function petDiaryInfoGetDiaryDetail(data, repair='') {
  return common.go({
    method: 'get',
    url: '/petDiary/info/getDiaryDetail' + repair,
    data: data
  })
}

// 查询日记评论列表（仅返回两层）
export function petDiaryInfoGetCommectLists(data, repair='') {
  return common.go({
    method: 'get',
    url: '/petDiary/info/getCommectLists' + repair,
    data: data
  })
}