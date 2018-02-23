const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  bindViewTap1: function () {
   wx.showToast({
     title: '最近热映',
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