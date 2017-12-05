takeScreenshot: function(callback) {
  chrome.extension.sendMessage({name: "screenshot"}, function(response) {
    var data = response.screenshotUrl
    var canvas = document.createElement("canvas")
    var img = new Image()
    img.onload = function() {
      canvas.width = $(window).width()
      canvas.height = $(window).height()
      canvas.getcontext("2d").drawImage(img, 0,0,canvas.width, canvas.height)
      var $canvas = $(canvas)
      $canvas.data('scrollLeft', $(document.body).scrollLeft())
      $canvas.data('scrollTop', $(document.body).scrollTop())

      callback($canvas)
    }
    img.src = data
  })
}
