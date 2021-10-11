// pages/personal_info/personal_info.js
var app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        items: [{
                name: 'man',
                value: '男'
            },
            {
                name: 'women',
                value: '女',
                checked: 'true'
            },
        ],
        multiArray: [
            ['编程类', "美工类", "理工类", "文稿类", "其他"],
            ["Pyhton", "Java", "C++", "前端架构", "数据处理"]
        ],
        multiIndex: [0, 0],
    },
    bindMultiPickerColumnChange: function (e) {
        // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        var data = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        data.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex[0]) {
                    case 0:
                        data.multiArray[1] = ["Pyhton", "Java", "C++", "前端架构", "数据处理"]
                        break;
                    case 1:
                        data.multiArray[1] = ["PS", "PR", "CAD", "样式设计"]
                        break;
                    case 2:
                        data.multiArray[1] = ["请在备注中写明"]
                        break
                }
                case 1:
                    break;
        }
        this.setData(data);
    },
    saveInfo: function (option) {
        wx.showModal({
            title: '通知',
            content: '您的信息已经保存',
            showCancel: false,
            confirmText: '确定',
            success: function (res) {
                wx.switchTab({
                    url: '../mine/mine',
                })
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