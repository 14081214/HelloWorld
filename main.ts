function pyramid(n:number):void{
    var k:string = " ";
    var x:string = "*";
    for(var i=0;i<n;i++){
        for(var j=0;j<n-i-1;j++){
            console.log(k);
        }
        for(var z=0;z<i;z++){
            console.log(x);
        }
    }
}
//var a = parseInt(n);
pyramid(5);