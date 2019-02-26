(function(){
    //创建战机
    var flyEle=document.createElement('div');
    flyEle.setAttribute('id','fly_me');
    flyEle.innerHTML='<img src="./img/me.png" />';
    document.body.appendChild(flyEle);
    //战机随着鼠标移动
    document.onmousemove=function(e){
        var flyEle=document.getElementById('fly_me');
        var view=document.getElementById('view');
        var flyX=e.clientX-17;
        var flyY=e.clientY-12;
        var xCheck=flyX>view.offsetLeft&&flyX<view.offsetLeft+view.offsetWidth-34;
        var yCheck=flyY>view.offsetTop&&flyY<view.offsetTop+view.offsetHeight-24;
        if(xCheck&&yCheck){
            flyEle.style.left=flyX+'px';
            flyEle.style.top=flyY+'px';
            flyEle.flag=true;
        }
    }
})();