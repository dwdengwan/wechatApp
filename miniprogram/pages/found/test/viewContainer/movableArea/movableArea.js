// pages/found/test/viewContainer/movableArea/movableArea.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    x: 0,
    y: 0,
    scale: 2,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tap() {
      this.setData({
        x: 30,
        y: 30
      })
    },
    tap2() {
      this.setData({
        scale: 3
      })
    },
    onChange(e) {
      console.log(e.detail)
    },
    onScale(e) {
      console.log(e.detail)
    }
  }
})
