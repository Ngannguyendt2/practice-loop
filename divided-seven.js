function sum() {
    let i = 1,count=0,total=0;
    do{
if(i % 7 == 0)
{
    total=total+i;
    count++;
}
    }while ((i++) && (count<29));
    document.write(total);
}