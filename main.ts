function Printpyramid(totalLine:number):void{
    for(var currentLine=0;currentLine<totalLine;currentLine++){
        var singleLine:string = "";
        for(var spaceCount=0;spaceCount<totalLine-currentLine-1;spaceCount++){
           singleLine = singleLine+" ";
        }
        for(var starCount=0;starCount<2*currentLine+1;starCount++){
           singleLine = singleLine+"*";
        }
        console.log(singleLine);
    }
}
//var num:string = process.argv[2];
//var ynumInt:number = parseInt(num);
Printpyramid(8);