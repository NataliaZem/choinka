var sign = prompt("You want your tree to be builded with:","#");
var height = prompt("The height of your tree will be:","8");


for(let i=1; i<height; i++) {
    for(let j=0; j<i; j++)
        document.write(sign);
    document.write("<br>");
}
