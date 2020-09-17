import {
  petDiaryInfoGetDiary
} from '../../config/api'

Page({
  data: {
    lsit: [],
    page: 1,
    pageSize: 15
  },

  onLoad() {
    this.getData()
  },

  getData(addStatus = false) {
    let obj = {
      pageNo: this.data.page,
      pageSize: this.data.pageSize
    }
    petDiaryInfoGetDiary(obj).then(res => {
      if (addStatus) {
        this.setData({
          list: this.data.list.concat(res.data)
        })
      } else {
        this.setData({
          list: res.data
        })
      }
    })
  },

  // 下一页
  onReachBottom() {
    this.setData({
      page: this.data.page + 1
    })
    this.getData(true)
  },

  // 跳转详情页
  toDetail(e) {
    if (e.currentTarget.dataset.videoid) {
      wx.navigateTo({
        url: '/pages/diaryDetail2/diaryDetail2?id=' + e.currentTarget.dataset.id,
      })
    } else {
      wx.navigateTo({
        url: '/pages/diaryDetail/diaryDetail?id=' + e.currentTarget.dataset.id,
      })
    }
  }
})