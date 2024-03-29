const app = getApp();
// pages/list-item/list-item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    wx.showNavigationBarLoading();
    app.douban.findOne(this.data.id).then(res => {
      // console.log(res.original_title, 'res.original_title');
      this.setData({
        movie: res,
        title: res.original_title
      })
      wx.setNavigationBarTitle({
        title: res.original_title
      })
      wx.hideNavigationBarLoading();
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})