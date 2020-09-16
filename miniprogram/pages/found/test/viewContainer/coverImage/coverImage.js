// pages/found/test/viewContainer/coverImage/coverImage.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindLoadSuccess:function(e){
      console.log('图片加载成功',e)
    },
    bindError:function(e){
      console.log('图片加载失败',e)
    }
  },
})
