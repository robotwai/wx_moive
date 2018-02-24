const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  bindViewTap1: function () {
    wx.navigateTo({
      url: '../list/list'
    })
  },
  bindViewTap2: function () {
    wx.showToast({
      title: '经典好片',
    })
  },
  bindViewTap3: function () {
    wx.showToast({
      title: '观看历史',
    })
  }
})