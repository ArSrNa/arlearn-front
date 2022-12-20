var __html=
`<li class="nav-item active"> <a class="nav-link" href="https://www.arsrna.cn">主站 <span class="sr-only">(current)</span></a> </li>
<li class="nav-item"> <a class="nav-link" href="#JavaLearn">Java</a> </li>
<li class="nav-item"> <a class="nav-link" href="#jslearn">JS</a> </li>
<li class="nav-item"> <a class="nav-link" href="#other">其它</a> </li>

`


function changeBg(url,select,defaultBg) {
  if(defaultBg){
    //选择默认背景时
    $("#bgFilePath").html('默认背景');
    localStorage.setItem('backgroundURL','https://res.arsrna.cn/%E5%B4%A9%E5%9D%8F3/307e97670bccb52217793c37875db3b6_4575220996410919312.png_web');
  }else{
     $("#bgFilePath").html(url);
     localStorage.setItem('backgroundURL',url);
  }
  localStorage.setItem('backgroundSwitch',select);
  location.reload()
}

function startChangeBg() {
  $('#bgChangeContainer').html(__bgTemp)
  var url = localStorage.getItem('backgroundURL'),
      open = localStorage.getItem('backgroundSwitch');
      //背景设置部分
  if(open=='true'){
    $("#bgFilePath").html(url);
    $("#bgSwitch")[0].checked = true;
    $('.backgroundImg').attr('src',url)
  }else{
    $(".backgroundImg").remove();
    $("#bgSwitch")[0].checked = false;
  }
}

var __bgTemp=`<div class="d-grid gap-2">
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#changeBg">更换背景</button>
</div>

<div class="modal fade" id="changeBg" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="10" aria-labelledby="changeBgLabel">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="changeBgLabel">选择一张图片</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
      </button>
    </div>
    <div class="modal-body">
      <input type="text" class="form-control" placeholder="请输入图片URL，因浏览器原因暂不支持本地文件上传" id="bgFile" oninput="$('#bgFilePath').html(this.value)">
      <div class="text-muted" id="bgFilePath">
      </div>
      <div class="row">
        <div class="col-6">
          <input class="form-check-input" type="checkbox" id="bgSwitch" checked onchange="
          if(this.checked){$('#bgFile').removeAttr('readonly')}else{$('#bgFile').attr('readonly','')}">
          <label class="form-check-label" for="bgSwitch">开启背景</label>
        </div>
        <div class="col-6">
          <input class="form-check-input" type="checkbox" id="defaultBg" onchange="
          if(this.checked){$('#bgFile').attr('readonly','')}else{$('#bgFile').removeAttr('readonly')}">
          <label class="form-check-label" for="defaultBg">默认背景</label>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
      <button type="button" class="btn btn-primary" onclick="changeBg($('#bgFilePath').html(),$('#bgSwitch')[0].checked,$('#defaultBg')[0].checked);"
      data-bs-dismiss="modal">确定</button>
    </div>
  </div>
</div>
</div>`