Page({
  data: {
    opShow: true,
    videoList: [{
        id: 0,
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      },
      {
        id: 1,
        url: "http://vjs.zencdn.net/v/oceans.mp4"
      },
      {
        id: 2,
        url: "https://www.w3school.com.cn/example/html5/mov_bbb.mp4"
      }
    ],
    current: 0,
    stopShow: false
  },

  onLoad() {
    wx.createVideoContext('v' + this.data.current).play()
  },

  // 开启关闭操作侧栏
  opShow() {
    this.setData({
      opShow: !this.data.opShow
    })
  },

  // 播放,暂停视频
  opVideo() {
    if (this.data.stopShow) {
      wx.createVideoContext('v' + this.data.current).play()
    } else {
      wx.createVideoContext('v' + this.data.current).stop()
    }
    this.setData({
      stopShow: !this.data.stopShow
    })
  },

  // 切换视频
  bindchange(e) {
    wx.createVideoContext('v' + this.data.current).stop()
    wx.createVideoContext('v' + e.detail.current).play()
    this.setData({
      current: e.detail.current,
      stopShow: false
    })
  }
})