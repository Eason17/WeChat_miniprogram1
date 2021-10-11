// pages/team_detail/team_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teams: [{
      "logo_src": "../../icon/logo4.png",
      "name": "随便创",
      "introduction": 265,
      "id": 265,
      "num_of_people": 2,
      "max_num": 4,
      "column": "学科学术",
      "competition_name": "英语翻译大赛",
      "need": ["ps", "java"]
    }],
  },

  apply: function () {
    wx.showModal({
      title: '成功',
      content: '你的申请已发送到该队队长处',
      showCancel: false,
      //订单发布成功后运行存储数据
      success: function (res) {
        // 跳转页面
        wx.switchTab({
          url: '../index/index',
        });
      }
    });
  },
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