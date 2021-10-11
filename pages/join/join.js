// pages/join/join.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        teams: [
            {
                "logo_src": "../../icon/logo.jpg",
                "id": 265,
                "name": "随便创",
                "num_of_people": 3,
                "max_num": 4,
                "need": ["样式设计",
                    "数据处理",
                ]
            },
        ],
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

    },
    join_the_team: function () {
        wx.showModal({
            title: '提示',
            content: '您的加入请求已通知队长',
            showCancel: true,
        })
    }
})