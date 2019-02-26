(function(){
    var objB={
        name:'bullet',
        num:1,
        arr:[],
        width:6,
        height:14,
        path:'./img/b.png',
        position:'absolute'
    }
    createBullet(objB);
    function createBullet(obj){
        setInterval(function(){
            var flyEle=document.getElementById('fly_me');
            if(flyEle.flag){
                var ele=document.createElement('div');
                ele.setAttribute('id',obj.name+obj.num);
                var length=obj.arr.length;
                if(length<50){
                    obj.arr[length]=ele.id+'|';
                    obj.num++;
                    ele.style.width=obj.width+'px';
                    ele.style.height=obj.height+'px';
                    ele.style.position=obj.position;
                    ele.style.background='url('+obj.path+')';

                    ele.style.top = parseInt(flyEle.style.top) + 6 + 'px';
                    obj.arr[length] = obj.arr[length] + ele.style.top + '|';
                    ele.style.left = parseInt(flyEle.style.left) + 14 + 'px';
                    obj.arr[length] = obj.arr[length] + ele.style.left;
                    //console.log(obj.arr[length]);
                }
                document.body.appendChild(ele);
            }
        },1000)   
    }
    function moveBullet(){
        var flyEle=document.getElementById('fly_me');
        if(flyEle.flag){
            for(var i=0;i<objB.arr.length;i++){
                var newArr=objB.arr[i].split('|');
                var eleB=document.getElementById(newArr[0]);
                newArr[1]=parseInt(newArr[1])-1;
                eleB.style.top=newArr[1]+'px';
                objB.arr[i]=newArr[0]+'|'+newArr[1]+'px|'+newArr[2];
                //console.log(objB.arr[i]);
                if(top<0){
                    objB.arr.splice(i,1);
                    eleB.parentNode.removeChild(eleB);
                }
            }
        }
    }
    window.moveBullet=moveBullet;
    window.objB=objB;


})();








