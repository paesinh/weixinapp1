// This is our App Service.
// This is our data.
var helloData = {
  response: ''
}
// Register a Page.
Page({
  data: helloData,
  httpRequest: function (e) { //对应：<button bindtap="httpRequest"> http test </button>的button点击
    var that = this
    wx.request({
      url: 'https://www.paesinh.club/weixinapptest.php', //仅为示例，要根据你实际的接口地址   
      data: {
        x: 'bai',
        y: 'bai'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          response: res.data //把接收到的服务器数据显示到{{response}}中
        })
      }
    })
  }
})