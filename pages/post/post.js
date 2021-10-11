var app = getApp()
var common = require("../../utils/common.js")
//调用common.js中的函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_arr: [],
    title:"" ,
    content:"",
    type: [{
      id: 1,
      name: '组队',
      checked: 'true'
  }, {
      id: 2,
      name: '日常交流',
  }, {
      id: 3,
      name: '经验分享',
  }, {
      id: 4,
      name: '新闻分享',

  }],
  current: "组队"//默认值
  },
handleTypeChange(e) {
  console.log('radio发生change事件，携带value值为：', e.detail.value)
    const type = this.data.type
    for (let i = 0, len = type.length; i < len; ++i) {
      type[i].checked = type[i].name === e.detail.value
    }
    this.setData({
      type
    })
},
formSubmit: function (e) {
  this.upload(e)
  let content = e.detail.value.content
  let title = e.deatil.value.title
  let current = this.data.current
  wx.setStorageSync(content)
  wx.setStorageSync(title)
  wx.setStorageSync(current)
},
upload: function(e){
  var that = this
  if(that.data.img_arr[0]==null){
    wx.request({
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      url:app.globalData.url+"post",
      data:{
        "content":e.detail.value.content,
        'title': e.detail.value.title,
        'current': that.data.current
      },
      method:"POST",
      success: function(res) {
        if(res){
          wx.showToast({
            title:"已提交审核，请耐心等待",
            duration:3000
          });
          setTimeout(() => {
            wx.switchTab({
              url: '../../pages/community/community',
            })
          },1000
          );
        }
      }
    })
  }
},

upimg: function () {
  var that = this;
  if (this.data.img_arr.length  < 1) {
    wx.chooseImage({//选择图片
      count:1,//一张图片
      sizeType: ['original', 'compressed'],
      success: function (res) {
        that.setData({
          img_arr: that.data.img_arr.concat(res.tempFilePaths)
        })
      }
    })
  } 
},

listenerButton:function() {
  this.setData({
      hiddenModal: false
  })
},

listenerConfirm:function() {
  this.setData({
      hiddenModal: true
  })
},

listenerCancel:function() {
  this.setData({
      hiddenModal: true
  })
},

  /** 
   * 生命周期函数--监听页面加载
   */
  //每次页面一加载就会获取common.js中的内容
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
