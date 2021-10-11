var util = require('../../utils/util.js');
const app = getApp()
Page({
    data: {
        multiArray1: [
            ['编程类', "美工类", "理工类", "文稿类", "其他"],
            ["Pyhton", "Java", "C++", "前端架构", "数据处理"]
        ],
        multiIndex1: [0, 0],
        multiArray2: [
            ['编程类', "美工类", "理工类", "文稿类", "其他"],
            ["Pyhton", "Java", "C++", "前端架构", "数据处理"]
        ],
        multiIndex2: [0, 0],
        multiArray3: [
            ['编程类', "美工类", "理工类", "文稿类", "其他"],
            ["Pyhton", "Java", "C++", "前端架构", "数据处理"]
        ],
        multiIndex3: [0, 0],
    },
    onLoad: function () {},
    /**上传订单数据,并给用户回应
     * 
     */
    bindMultiPickerColumnChange1: function (e) {
        // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        var data = {
            multiArray1: this.data.multiArray1,
            multiIndex1: this.data.multiIndex1
        };
        data.multiIndex1[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex1[0]) {
                    case 0:
                        data.multiArray1[1] = ["Pyhton", "Java", "C++", "前端架构", "数据处理"]
                        break;
                    case 1:
                        data.multiArray1[1] = ["PS","PR","CAD","样式设计"]
                        break;
                    case 2:
                        data.multiArray1[1] = ["请在备注中写明"]
                        break
                }
                case 1:
                    break;
        }
        this.setData(data);
    },
    bindMultiPickerColumnChange2: function (e) {
        // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        var data = {
            multiArray2: this.data.multiArray2,
            multiIndex2: this.data.multiIndex2
        };
        data.multiIndex2[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex2[0]) {
                    case 0:
                        data.multiArray2[1] = ["Pyhton", "Java", "C++", "前端架构", "数据处理"]
                        break;
                    case 1:
                        data.multiArray2[1] = ["PS","PR","CAD","样式设计"]
                        break;
                    case 2:
                        data.multiArray2[1] = ["请在备注中写明"]
                        break
                }
                case 1:
                    break;
        }
        this.setData(data);
    },
    bindMultiPickerColumnChange3: function (e) {
        // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        var data = {
            multiArray3: this.data.multiArray3,
            multiIndex3: this.data.multiIndex3
        };
        data.multiIndex3[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex3[0]) {
                    case 0:
                        data.multiArray3[1] = ["Pyhton", "Java", "C++", "前端架构", "数据处理"]
                        break;
                    case 1:
                        data.multiArray3[1] = ["PS","PR","CAD","样式设计"]
                        break;
                    case 2:
                        data.multiArray3[1] = ["请在备注中写明"]
                        break
                }
                case 1:
                    break;
        }
        this.setData(data);
    },
    uploadData: function () {
        // 少写一点
        const that = this.data
        // 加载data数据
        const {
            companiesImg
        } = that
        const kong = undefined | ''
        // 判断是否填写完整
        if (true) {
            wx.showModal({
                title: '通知',
                content: '创建队伍成功！祝你竞赛顺利',
                showCancel: false,
                confirmText: '收到',
                success: function (res) {
                    wx.switchTab({
                      url: '../index/index',
                      
                    })
                }
            });
        } else {
            wx.showModal({
                title: '警告',
                content: '您的信息没有填写完全',
                showCancel: false,
            })
        }
    },
})