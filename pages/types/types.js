// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1000,
    number: 0,
    list: [
      {
        id: 0,
        name: 'pig'
      },
      {
        id: 1,
        name: 'cat'
      }
    ],
    person: {
      name: 'czf',
      age: 20,
      tall: '178cm'
    }
  },

  // input事件绑定
  handleInput(e) {
    this.setData({
      num: e.detail.value
    })
  },
  handletap(e) {
    // 定义operation
    const operation = e.currentTarget.dataset.operation;
    // 读取data中的number，需要用this.data.num
    this.setData({
      number: this.data.number + operation
    })
  },

  // 加减事件

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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