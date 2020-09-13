const app = getApp()

Page({
  data: {
    x: 0,
    y: 0,
    hidden: true,
    tiemr:null
  },

  onLoad: function() {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFillStyle('red');
    ctx.fillRect(10,10,150,75);
    ctx.draw()
    this.tiemrCanvas()
  },

  onShow:function(){
    // setTimeout(()=>{
    //   wx.navigateTo({url:'/pages/index/index'}) 
    // },3000)
  },

  onGetUserInfo: function(e) {
    
  },

  //随机一种颜色 
  randColor(){
    let r,g,b,a;
    r = parseInt(Math.random() * 255);
    g = parseInt(Math.random() * 255);
    b = parseInt(Math.random() * 255); 
    a = Math.random()
    return `rgba(${r},${g},${b},${a})`
  },
  // 随机canvas
  randCanvas(){
    const ctx2 = wx.createCanvasContext('youCanvas')
    const grd = ctx2.createLinearGradient(0, 0, 290, 0)
    // grd.addColorStop(0, this.randColor())
    for (let i = 0; i < Math.ceil(Math.random() * 10);i++){
      grd.addColorStop(Math.random(),this.randColor())
    }
    // grd.addColorStop(1, this.randColor())
    ctx2.setFillStyle(grd)
    ctx2.fillRect(10, 10, 290, 140)
    ctx2.draw()

    const ctx3 = wx.createCanvasContext('heCanvas');
    let x = parseInt(Math.random() * 100 + 100);
    let y = parseInt(Math.random() * 50 + 50);
    let r = parseInt(Math.random() * 20 + 30)
    const grd3 = ctx3.createCircularGradient(x,y,r);
    for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
      // grd4 = ctx3.createCircularGradient(parseInt(Math.random() * 300), parseInt(Math.random() * 150), parseInt(Math.random() * 50))
      grd3.addColorStop(Math.random(), this.randColor())
      // grd4.addColorStop(Math.random(), this.randColor())
    }
    ctx3.setFillStyle(grd3)
    // ctx3.setFillStyle(grd4)
    ctx3.fillRect(10, 10, 290, 140)
    ctx3.draw()
  },

  tiemrCanvas(){
    this.randCanvas()
    this.data.tiemr = setInterval(()=>{
      this.randCanvas()
    },3000)
  },

  goHome(){
    wx.navigateTo({ url: '/pages/index/index' }) 
  },
  goNext(){
    wx.navigateTo({ url: '/pages/demo/demo' })
  },

  start(e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move(e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  end(e) {
    this.setData({
      hidden: true
    })
  }
})
