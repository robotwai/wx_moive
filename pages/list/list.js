const util = require('../../utils/util.js')
Page({
  data: {
    array: [],
    hidden: false
  },
  //事件处理函数
  bindViewTap1: function () {
    wx.showToast({
      title: '最近热映',
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://m.maoyan.com/movie/list.json', //仅为示例，并非真实的接口地址
      data: {
        type: 'hot',
        offset: '0',
        limit:'1000'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          array: res.data.data.movies,
          hidden:true
        })
      }
    })
  },


})