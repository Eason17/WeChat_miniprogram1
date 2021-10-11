var common = require("../../utils/common.js")
//调用common.js中的函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postlist:[

    ]
    //因为postlist的内容在多个页面的js文件都有用到，所以直接写到common.js中了
  },

  /**
   * 生命周期函数--监听页面加载
   */
  goToDetail:function(e){
    //获取携带data-id的数据
    let id = e.currentTarget.dataset.id
    console.log(e)
    //在console.log中看这个
    //携带帖子id进行页面跳转
    wx.navigateTo({
      url:"../detail/detail?id=" + id,
      //?后加参数
    })
  },
  goToPost:function(){
    wx.navigateTo({
      url:"../post/post"
    })
  },
  onLoad: function (options) {
    let list = common.getPostList()
    this.setData({
      postlist:list
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