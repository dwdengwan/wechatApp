// miniprogram/pages/common/footerHtml/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footerData:[
      {
        name:"微信",
        id:"10001"
      },
      {
        name:"通讯录",
        id:"10002"
      },
      {
        name:"发现",
        id:"10003"
      },
      {
        name:"我",
        id:"10004"
      },
    ],
    activeIndex:app.globalData.currentPage,
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
    // wx.navigateTo
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
  /**
   * 
   * @param {i} */ 
  handleTouchBack: function(e){
    // 传递的参数
    let query = e.currentTarget.dataset['index'];
    let num = parseInt(query);
    let currentPage = parseInt(app.globalData.currentPage);
    let url = '';
    if(num == currentPage){return}//如果在当前页 不进行页面跳转
    switch(num){
      case 0:
        console.log('0')
        url = '/pages/wechat/index/index';
        break
      case 1:
        console.log('1')
        url = '/pages/addrbook/index/index';
        break
      case 2:
        console.log('2')
        url = '/pages/found/index/index';
        break
      case 3:
        console.log('3')
        url = '/pages/myself/index/index';
        break  
    }
    wx.navigateTo({url})
    this.setData({
      activeIndex:num,
    })
    console.log(this.data.activeIndex,app.globalData.currentPage,num)
  }
})