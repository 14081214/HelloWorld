
function pyramid(n:number):void{
    var w:string = "";
    //var k:string = " ";
    //var x:string = "*";
    for(var i=0;i<n;i++){
        for(var j=0;j<n-i-1;j++){
           // console.log("l");
           w = w+" ";
        }
        for(var z=0;z<i;z++){
           // console.log("*");
           w = w+"*";
        }
    }
    console.log(w);
}
//var a = parseInt(n);
pyramid(5);