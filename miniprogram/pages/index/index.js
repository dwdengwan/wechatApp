//index.js
const app = getApp()

Page({
  data: {
    number:1,
    timer:null
  },

  onShow: function() {
    
  },

  onLoad:function(){
    let obj = {
      arr:[
        {
          key:'dyk',
          value:'name',
        },
        {
          key:'dw',
          value:'age',
        },
        {
          key:'wf',
          value:'addr',
        },
      ],
      option:{
        name:"1126",
        age:'26',
        addr:"sz"
      }
    }
    let newobj={};   
    obj.arr.forEach(item=>{
      if(obj.option.hasOwnProperty(item.value)){
        newobj[item.key] = obj.option[item.value]
      }
    })
    console.log(newobj);
    let arr = [];
    for(let key in newobj){
      arr.push([key,newobj[key]]);
    }
    console.log(arr)
    let n = 1;
    this.data.timer = setInterval(()=>{
      n++;
      this.setData({
        number:n
      })
    },1000)
  },

  onHide(){
    if(this.data.timer){
      clearInterval(this.data.timer)
    }
  },

  onGetUserInfo: function(e) {
    
  },

   /**
   * 组件的方法列表
   */
  goLogin:function(){
    clearInterval(this.data.timer)
    wx.navigateTo({url:'/pages/login/login'}) 
    console.log('dyk')
  }

})
