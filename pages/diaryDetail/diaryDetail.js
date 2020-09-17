import {
  petDiaryInfoGetDiaryDetail,
  petDiaryInfoGetCommectLists
} from '../../config/api'

Page({
  data: {
    id: null,
    imgList: [], // 图片数组
    imgheights: [], // 图片高度数组
    petDiary: {},
    current: 0, // 默认图片索引
    commentList: {}
  },

  onLoad(options) {
    this.setData({
      id: options.id
    })
    this.getData()
    this.getComment()
  },

  getData() {
    let obj = {
      pageNo: 1,
      pageSize: 1
    }
    let repair = '/' + this.data.id
    petDiaryInfoGetDiaryDetail(obj, repair).then(res => {
      this.setData({
        imgList: res.data.petDiary.mediaUrl.split(";"),
        petDiary: res.data.petDiary,
      })
    })
  },

  // 获取评论
  getComment() {
    let repair = '/' + this.data.id + '/0'
    petDiaryInfoGetCommectLists(null, repair).then(res => {
      this.setData({
        commentList: res.data
      })
    })
  },

  //获取图片真实高度  
  imageLoad(e) {
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      ratio = imgwidth / imgheight;
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },

  // 切换图片
  bindchange(e) {
    this.setData({
      current: e.detail.current
    })
  },

  // 切换图片
  check(e) {
    this.setData({
      current: e.currentTarget.dataset.key
    })
  },

  // 预览图片
  lookImg(e){
    wx.previewImage({
      current: this.data.imgList[e.target.dataset.id],
      urls: this.data.imgList
    })
  }
})