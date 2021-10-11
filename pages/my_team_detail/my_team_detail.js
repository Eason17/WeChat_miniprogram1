// pages/team_detail/team_detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        teams: [{
            "logo_src": "../../icon/logo.jpg",
            "name": "竞赛鹿",
            "id": 93,
            "num_of_people": 1,
            "max_num": 4,
            "column": "计算机类",
            "competition_name": "2021年（第十三届）上海市大学生计算机应用能力大赛",
            "need": ["python" ]
        }],
    },

    apply: function () {
        wx.showModal({
            title: '警告',
            content: '你确定要解散这个队伍吗？！',
            showCancel:true,
            //订单发布成功后运行存储数据
              success (res) {
                if (res.confirm) {
                  wx.showToast({
                    title: '你已成功解散队伍',
                    icon: 'success',
                    duration: 2000,
                    success (res) {
                      wx.switchTab({
                        url: '../index/index',
                      })
                    }
                  })
                } else if (res.cancel) {
                  
                }
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