var common = require('./request')

//获取免登可看的日记列表
export function petDiaryInfoGetDiary(data, repair='') {
  return common.go({
    method: 'get',
    url: '/petDiary/info/getDiary' + repair,
    data: data
  })
}