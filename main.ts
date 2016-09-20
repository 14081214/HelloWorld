function pyramid(n:number):void{
    //var w:string = "";
    for(var i=0;i<n;i++){
        var w:string = "";
        for(var j=0;j<n-i-1;j++){
           w = w+" ";
        }
        for(var z=0;z<2*i+1;z++){
           w = w+"*";
        }
        //console.log("\n");
        console.log(w);
    }
}
//var x:string = process.argv[2];
//var y:number = parseInt(x);
pyramid(8);