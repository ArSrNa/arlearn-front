function urllayer(title,url) {
    let width = document.body.clientWidth;
    if(width <= 800) {
        window.yuukiAsuna = ['100%','100%'];
        console.log("mobile");
    } else {
        window.yuukiAsuna = ['80%','70%'];
        console.log("computer");
    }
    
    layer.open({
      type: 2,
      shade: 0,
      title: title,
      content: url,
    maxmin: true,
    area: yuukiAsuna,
    
    
    btn: ['新标签页打开'],
      yes: function(index, layero){
       window.open(url);
      }
    });
    }
    
    function communication() {
    layer.open({
      type: 2,
      title: "Ar-Sr-Na联系方式",
      content: "https://www.arsrna.cn/communication/",
    maxmin: true,
    area: ['80%', '70%'],
    btn: ['新标签页打开'],
      yes: function(index, layero){
       window.open('https://www.arsrna.cn/communication/');
      }
    });
    }