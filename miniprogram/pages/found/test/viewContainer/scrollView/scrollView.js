// pages/found/test/viewContainer/scrollView/scrollView.js
const order = ['demo1', 'demo2', 'demo3']
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
    toView: 'green'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    upper(e) {
      console.log(e)
    },
  
    lower(e) {
      console.log(e)
    },
  
    scroll(e) {
      console.log(e)
    },
  
    scrollToTop() {
      this.setAction({
        scrollTop: 0
      })
    },
  
    tap() {
      for (let i = 0; i < order.length; ++i) {
        if (order[i] === this.data.toView) {
          this.setData({
            toView: order[i + 1],
            scrollTop: (i + 1) * 200
          })
          break
        }
      }
    },
  
    tapMove() {
      this.setData({
        scrollTop: this.data.scrollTop + 10
      })
    }
  }
})
