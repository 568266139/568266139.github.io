function linsting() {
  //获取对象
  var imgs = document.querySelectorAll(".centerone  .center-right-thwree-img img");

  //监听图片加载

  for (var i = 0; i < imgs.length; i++) {
    //获取对象的宽度
    var imgWidth = imgs[i].offsetWidth;
    //设置对象的高度 记得+px
    imgs[i].style.height = imgWidth + 'px';

  }


}

function listrner(id) {

  document.addEventListener("click", console("监听"))
}

function clickon(id) {
  //   var clicks=document.querySelectorAll(".center-right-for-img");

  //   for(var i=0;i<clicks.length;i++){
  //  clicks[i].addEventListener("click",console.log('监听'))
  //  console.log(clicks[i]);
  //   }
  // console.log("正在被点击");
  console.log(id);
  if (id.previousElementSibling) {
    // var dispalys=id.previousElementSibling.style.display.value; 
    var displays = window.getComputedStyle(id.previousElementSibling, null).display;
    console.log(displays);
    if (displays == "none") {
      id.previousElementSibling.style.display = "flex";
    } else {
      id.previousElementSibling.style.display = "none";
    }
  }
}

function dainzhan(dzid) {
  // 不带Element的nextSibling和previousSibling实际上获得的是下一个/上一个兄弟节点的文本节点，
  // 如果你想要连同元素节点一起响应事件的话，就必须使用带Eelement的nextElementSibling和previousElementSibling。
  var dianji = dzid.parentNode.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild;
  var jdshuxin = window.getComputedStyle(dianji, null).display;

  console.log(jdshuxin);
  if (jdshuxin == "none") {
    dianji.style.display = "flex";
    dzid.innerHTML = "取消";
    dzid.parentNode.parentNode.style.display = "none";

  } else {
    dianji.style.display = "none";
    dzid.innerHTML = "赞";
    dzid.parentNode.parentNode.style.display = "none";
  }

}