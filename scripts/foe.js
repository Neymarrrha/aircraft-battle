(function(){
    var objF={
        name:'foe',
        num:1,
        arr:[],//['id|top|left]
        width:34,
        height:24,
        path:'./img/foe.png'
    };
    createFoe(objF);
    function createFoe(obj){
        setInterval(function(){
            var flyEle=document.getElementById('fly_me');
            if(flyEle.flag){
                var view=document.getElementById('view');
                var ele=document.createElement('div');
                ele.setAttribute('id',obj.name+obj.num);
                var length=obj.arr.length;
                if(length<50){
                    obj.arr[length] = ele.id + '|';
                    obj.num++;
                    ele.style.width = obj.width + "px";
                    ele.style.height = obj.height + "px";
                    ele.style.position = 'absolute';
                    ele.style.background = 'url(' + obj.path + ')';
                    ele.style.top = 0;
                    obj.arr[length] = obj.arr[length] + ele.style.top + '|';
                    var ran = Math.random() * 286;
                    ele.style.left = view.offsetLeft + ran + 'px';
                    obj.arr[length] = obj.arr[length] + ele.style.left;
                    //console.log(obj.arr[length]);
                }
                document.body.appendChild(ele);
            }
        },1000)
    }

    function moveFoe(){
        var view=document.getElementById('view');
        var flyEle=document.getElementById('fly_me');
        if(flyEle.flag){
            for(var i=0;i<objF.arr.length;i++){
                var newArr=objF.arr[i].split('|');
                var ele=document.getElementById(newArr[0]);
                newArr[1]=parseInt(newArr[1])+1;
                ele.style.top=newArr[1]+'px';
                objF.arr[i]=newArr[0]+'|'+newArr[1]+'px|'+newArr[2];
                if(newArr[1]>view.offsetHeight-24){
                    objF.arr.splice(i,1);
                    ele.parentNode.removeChild(ele);
                }
            }
        }
    }
    window.moveFoe=moveFoe;
    window.objF=objF;
    //console.log(window);
})();