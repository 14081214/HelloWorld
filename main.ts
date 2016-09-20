
function pyramid(n:number):void{
    //var w:string = "";
    //var k:string = " ";
    //var x:string = "*";
    for(var i=0;i<n;i++){
        var w:string = "";
        for(var j=0;j<n-i-1;j++){
           // console.log("l");
           w = w+" ";
        }
        for(var z=0;z<2*i+1;z++){
           // console.log("*");
           w = w+"*";
        }
        //console.log("\n");
        console.log(w);
    }
    //console.log(w);
}
//var a = parseInt(n);
pyramid(7);