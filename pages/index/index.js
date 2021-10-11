// pages/types/types.js
import {
  request
} from '../../requests/request_deal.js';
var app = getApp();
Page({
  data: {
    all_info: app.globalData.categorys,
    tabs: [{
        id: 0,
        name: '个人类',
        isActive: true
      },
      {
        id: 1,
        name: '团队类',
        isActive: false
      }, 
    ],
    // 这是个人类和团队类的flag
    cate_level1: 0,
    cate_level2: 0,
    cate_level3: 0,
    // 定义轮播图
    swiperList: [],
    // 导航数组
    // catesList: [],
    // 接口返回数据
    // Cates: [],
    // 滚动顶部
    scrollTop: 0,
    // 点击分类时出现选项的hidden的flag
    flag: "true",

    swiperList:[  
    {url:'http://cdn1.52jingsai.com/portal/202011/16/172729n06chz2czg62q0ge.png'},  
    {url:'http://cdn1.52jingsai.com/portal/202010/09/145946myf0ryb7rrro07r0.png'},  
    {url:'http://cdn1.52jingsai.com/portal/202012/05/121100j0szed27q2oe0qsz.jpg'},  
    {url:'http://cdn1.52jingsai.com/portal/202004/21/104253ig8wggs8poo1007y.jpg'}
    ]
  },


  onLoad: function (options) {
    const {
      cate_level1
    } = this.data;
    const {
      cate_level2
    } = this.data;
    const {
      cate_level3
    } = this.data;
    this.getSwiperlist();
    this.setData({
      categorys: app.globalData.categorys[cate_level1].children,
      simple_info: app.globalData.categorys[cate_level1].children[cate_level2].children[cate_level3].children,
      sub_cates: app.globalData.categorys[cate_level1].children[cate_level2].children,
    })
  },

  // 改变显示的内容
  setUpInfo: function (option) {
    const {
      cate_level1
    } = this.data;
    const {
      cate_level2
    } = this.data;
    const {
      cate_level3
    } = this.data;
    const {
      all_info
    } = this.data;
    this.setData({
      simple_info: all_info[cate_level1].children[cate_level2].children[cate_level3].children,
    })
  },

  // 获取轮播图数据的方法
  getSwiperlist: function () {
    var that = this;
    wx.request({
      url: "http://119.45.36.212/static/competition.json",
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {},
      success: function (res) {
        console.log('数据加载成功')
        that.setData({
          swiperList: res.data
        })
      },
      fail: (err) => {
        console.error('失败')
      }
    })
  },
  // 个人类或团队类
  changeType(e) {
    var that = this
    const {
      index
    } = e.currentTarget.dataset;
    that.setData({
      cate_level1: index,
    })
this.setUpInfo()
  },

  // 竞赛科目类别
  chooseCate(e) {
    const {
      index
    } = e.currentTarget.dataset;
    const {
      cate_level1
    } = this.data;
    const {
      all_info
    } = this.data;
    // let content = this.comtest_info[index].children;
    this.setData({
      cate_level2: index,
      scrollTop: 0,
      sub_cates: all_info[cate_level1].children[index].children,
    })
    // this.setUpInfo();
  },
  chooseSubCate(e) {
    console.log("chooseSubCate")
    const {
      index
    } = e.currentTarget.dataset;
    this.setData({
      cate_level3: index,
    })
    this.setUpInfo();
  },


  // 隐藏分类
  concealType: function () {
    console.log('conseal')
    this.setData({
      flag: true
    })
  },

  // 显示分类
  showType: function () {
    console.log("show")
    this.setData({
      flag: false
    })
  },


  handleItemChange(e) {
    const {
      index
    } = e.detail;
    let {
      tabs
    } = this.data; //=let tabs = this.data.tabs
    tabs.forEach((v, i) => {
      i === index ? v.isActive = true : v.isActive = false
    });
    this.setData({
      tabs
    })
  }
});