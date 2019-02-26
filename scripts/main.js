(function(){
    //console.log(objF);
    setInterval(function(){
        moveBullet();
        moveFoe();

        for(var i=0;i<objF.arr.length;i++){
            var newArr=objF.arr[i].split('|');
            var eleF=document.getElementById(newArr[0]);
            var xLeft=parseInt(newArr[2]);
            var xRight=xLeft+34;
            var yTop=parseInt(newArr[1]);
            var yButtom=yTop+24;
            for(var j=0;j<objB.arr.length;j++){
                var newArr1=objB.arr[j].split('|');
                var eleB=document.getElementById(newArr1[0]);
                var xB=parseInt(newArr1[2]);
                var yB=parseInt(newArr1[1]);
                var xCheck=xB>xLeft&&xB<xRight;
                var yCheck=yB>yTop&&yB<yButtom;
                if(xCheck&&yCheck){
                    objF.arr.splice(i,1);
                    eleF.parentNode.removeChild(eleF);
                    objB.arr.splice(j,1);
                    eleB.parentNode.removeChild(eleB);
                }
            }
        }

    },10);

})();