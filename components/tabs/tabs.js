// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   * 里面存放的是要从父组件(调用处)接收的数据
   */
  properties: {
    tabs: {
      type: Array,
      value: ''
    }
  },

  /**
   * 组件内的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap1(e) {
      //   // 获取索引
      //   const { index } = e.currentTarget.dataset;
      //   // 获取data中的数组
      //   let { tabs } = this.data;//=let tabs = this.data.tabs
      //   // 遍历数组  这一步的原理我不懂
      //   tabs.forEach((v, i) => {
      //     i === index ? v.isActive = true : v.isActive = false
      //   });
      //   this.setData({
      //     tabs
      //   })
      // }

      const { index } = e.currentTarget.dataset;
      this.triggerEvent("itemChange", { index });
    }
  }})
