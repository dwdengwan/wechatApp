// pages/found/index/index.js
const app = getApp();
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      foundData:[
        {
          name:"朋友圈",
          id:"10001",
          url:"",
          isKongge:1,
        },
        {
          name:"视频号",
          id:"10002",
          url:"",
          isKongge:1,
        },
        {
          name:"扫一扫",
          id:"10003",
          url:"",
          isKongge:0,
        },
        {
          name:"摇一摇",
          id:"10004",
          url:"",
          isKongge:1,
        },
        {
          name:"看一看",
          id:"10005",
          url:"",
          isKongge:0,
        },
        {
          name:"搜一搜",
          id:"10006",
          url:"",
          isKongge:1,
        },
        {
          name:"附近的人",
          id:"10007",
          url:"",
          isKongge:1,
        },
        {
          name:"购物",
          id:"10008",
          url:"",
          isKongge:0,
        },
        {
          name:"游戏",
          id:"10009",
          url:"",
          isKongge:1,
        },
        {
          name:"小程序",
          id:"10010",
          url:"",
          isKongge:1,
        },
        {
          name:"测试",
          id:"10011",
          url:"/pages/found/test/test",
          isKongge:1,
        }
      ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.currentPage = 2;//修改全局变量 当前页面的下标为0
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

  },
  bindGoBack:function(e){
    console.log(e.currentTarget.dataset.item)
    let url = e.currentTarget.dataset.item.url;
    if(!url){return}
    wx.navigateTo({url})
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
