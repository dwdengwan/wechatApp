// miniprogram/pages/found/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHandleClick:false,
    testData:[
      {
        name:"视图容器",
        id:"100100",
        list:[
          {
            name:"cover-image",
            id:"100101",
            url:"/pages/found/test/viewContainer/coverImage/coverImage",
          },
          {
            name:"cover-view",
            id:"100102",
            url:"/pages/found/test/viewContainer/coverView/coverView",
          },
          {
            name:"match-media",
            id:"100103",
            url:"/pages/found/test/viewContainer/matchMedia/matchMedia",
          },
          {
            name:"movable-area",
            id:"100104",
            url:"/pages/found/test/viewContainer/movableArea/movableArea",
          },
          {
            name:"movable-view",
            id:"100105",
            url:"/pages/found/test/viewContainer/movableView/movableView",
          },
          {
            name:"scroll-view",
            id:"100106",
            url:"/pages/found/test/viewContainer/scrollView/scrollView",
          },
          {
            name:"swiper",
            id:"100107",
            url:"/pages/found/test/viewContainer/swiper/swiper",
          },
          {
            name:"swiper-item",
            id:"100108",
            url:"/pages/found/test/viewContainer/swiperItem/swiperItem",
          },
          {
            name:"view",
            id:"100109",
            url:"/pages/found/test/viewContainer/view/view",
          },
        ],
      },
      {
        name:"基础内容",
        id:"100200",
        list:[
          {
            name:"icon",
            id:"100201",
            url:"/pages/found/test/basedContent/icon/icon",
          },
          {
            name:"progress",
            id:"100202",
            url:"/pages/found/test/basedContent/progress/progress",
          },
          {
            name:"rich-text",
            id:"100203",
            url:"/pages/found/test/basedContent/richText/richText",
          },
          {
            name:"text",
            id:"100204",
            url:"/pages/found/test/basedContent/text/text",
          }
        ],
      },
      {
        name:"表单组件",
        id:"100300",
        list:[
          {
            name:"button",
            id:"100301",
            url:"",
          },
          {
            name:"checkbox",
            id:"100302",
            url:"",
          },
          {
            name:"checkbox-group",
            id:"100303",
            url:"",
          },
          {
            name:"editor",
            id:"100304",
            url:"",
          },
          {
            name:"form",
            id:"100305",
            url:"",
          },
          {
            name:"input",
            id:"100306",
            url:"",
          },
          {
            name:"label",
            id:"100307",
            url:"",
          },
          {
            name:"picker",
            id:"100308",
            url:"",
          },
          {
            name:"picker-view",
            id:"100309",
            url:"",
          },
          {
            name:"picker-view-column",
            id:"100310",
            url:"",
          },
          {
            name:"radio",
            id:"100311",
            url:"",
          },
          {
            name:"radio-group",
            id:"100312",
            url:"",
          },
          {
            name:"slider",
            id:"100313",
            url:"",
          },
          {
            name:"switch",
            id:"100314",
            url:"",
          },
          {
            name:"textarea",
            id:"100315",
            url:"",
          }
        ],
      },
      {
        name:"导航",
        id:"100400",
        list:[
          {
            name:"functional-page-navigator",
            id:"100401",
            url:"",
          },
          {
            name:"navigator",
            id:"100402",
            url:"",
          }
        ],
      },
      {
        name:"媒体组件",
        id:"100500",
        list:[
          {
            name:"audio",
            id:"100501",
            url:"",
          },
          {
            name:"camera",
            id:"100502",
            url:"",
          },
          {
            name:"image",
            id:"100503",
            url:"",
          },
          {
            name:"live-player",
            id:"100504",
            url:"",
          },
          {
            name:"live-pusher",
            id:"100505",
            url:"",
          },
          {
            name:"video",
            id:"100506",
            url:"",
          },
          {
            name:"voip-room",
            id:"100507",
            url:"",
          }
        ],
      },
      {
        name:"地图",
        id:"100600",
        list:[
          {
            name:"map",
            id:"100601",
            url:"",
          }
        ],
      },
      {
        name:"画布",
        id:"100700",
        list:[
          {
            name:"canvas",
            id:"100701",
            url:"",
          }
        ],
      },
      {
        name:"开放能力",
        id:"100800",
        list:[
          {
            name:"add",
            id:"100801",
            url:"",
          },
          {
            name:"add-custom",
            id:"100802",
            url:"",
          },
          {
            name:"official-account",
            id:"100803",
            url:"",
          },
          {
            name:"oppen-data",
            id:"100804",
            url:"",
          },
          {
            name:"web-view",
            id:"100805",
            url:"",
          }
        ],
      },
      {
        name:"原生组件说明",
        id:"100900",
        list:[
          {
            name:"native-component",
            id:"100901",
            url:"",
          }
        ],
      },
      {
        name:"无障碍访问",
        id:"101000",
        list:[
          {
            name:"aria-component",
            id:"101001",
            url:"",
          }
        ],
      },
      {
        name:"导航栏",
        id:"101100",
        list:[
          {
            name:"navigation-bar",
            id:"101101",
            url:"",
          }
        ],
      },
      {
        name:"页面属性配置节点",
        id:"101200",
        list:[
          {
            name:"page-meta",
            id:"101201",
            url:"",
          }
        ],
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let testData = this.data.testData;
    let isHandleClick = [];
    testData.forEach((item,i,arr)=>{
      isHandleClick.push(false);
    })
    this.setData({
      isHandleClick
    })
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
  handleChildTap:function(e){
    let index = e.currentTarget.dataset.index;
    let handleClick = this.data.isHandleClick;
    handleClick.forEach((item,i,arr)=>{
      if(i == index){
        handleClick[i] = !handleClick[i];
      } else {
        handleClick[i] = false;
      }
    })
    // handleClick[index] = !handleClick[index];
    this.setData({
      isHandleClick:handleClick,
    })
  },
  bindBchildTap:function(e){
   console.log(e.currentTarget.dataset.item);
   let url = e.currentTarget.dataset.item.url;
   if(!url){return}
   wx.navigateTo({
     url,
   })
  },
})