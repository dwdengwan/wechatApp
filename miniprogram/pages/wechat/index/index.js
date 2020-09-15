// miniprogram/pages/wechat/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wechatData:[
      {
        name:"豆豆",
        time:"周五",
        content:"自律 自律 自律 重要的话要说三遍。一定要自律。做自己的感兴趣的事情，兴趣是最好的老师。",
        id:"10001",
        num:1
      },
      {
        name:"贝贝",
        time:"周四",
        content:"自信，是人外在的一种气质。",
        id:"10002",
        num:2
      },
      {
        name:"晶晶",
        time:"周三",
        content:"可靠，办事可靠。",
        id:"10003",
        num:3
      },
      {
        name:"欢欢",
        time:"周二",
        content:"踏实，为人踏实。",
        id:"10004",
        num:4
      },
      {
        name:"莹莹",
        time:"周一",
        content:"踏实，可靠",
        id:"10005",
        num:4
      },
      {
        name:"妮妮",
        time:"周日",
        content:"踏实，可靠",
        id:"10006",
        num:5
      },
      {
        name:"健健",
        time:"周六",
        content:"踏实，可靠",
        id:"10007",
        num:7
      },
      {
        name:"康康",
        time:"周五",
        content:"踏实，可靠",
        id:"10008",
        num:8
      },
      {
        name:"快快",
        time:"周四",
        content:"踏实，可靠",
        id:"10009",
        num:9
      },
      {
        name:"乐乐",
        time:"周三",
        content:"成熟，稳重",
        id:"10010",
        num:10
      },
      {
        name:"一一",
        time:"周二",
        content:"踏实，可靠",
        id:"10011",
        num:11
      },
      {
        name:"二二",
        time:"周一",
        content:"踏实，可靠",
        id:"10012",
        num:26
      },
    ],
    // toHeaderHtmlObj:{
    //   currentPageText:"微信（26）",
    // }
    toHeaderHtmlObj:"1",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.currentPage = 0;//修改全局变量 当前页面的下标为0
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