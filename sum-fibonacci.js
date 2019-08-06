function sumfibo(fibo) {
    let number1=0,number2=1;
    let temp,sum=0;
    while(fibo>=0)
    {
        temp=number2;
        number2+=number1;
        number1=temp;
        sum=sum+number1;
        fibo--;
    }
    document.write('Sum of 20 number fibonacci is '+sum);
    document.write('<br>');
}