// miniprogram/pages/found/test/formComponents/switch/switch.js
var pageData = {
  data: {
    switch1Checked: true,
    switch2Checked: false,
    switch1Style: '',
    switch2Style: 'text-decoration: line-through'
  }
}
for (var i = 1; i <= 2; ++i) {
  (function (index) {
    pageData[`switch${index}Change`] = function (e) {
      console.log(`switch${index}发生change事件，携带值为`, e.detail.value)
      var obj = {}
      obj[`switch${index}Checked`] = e.detail.value
      this.setData(obj)
      obj = {}
      obj[`switch${index}Style`] = e.detail.value ? '' : 'text-decoration: line-through'
      this.setData(obj)
    }
  })(i)
}
// Page(pageData)
Page({

  /**
   * 页面的初始数据
   */
  data: {

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