function fibonacci(fibo) {
    let number1=0,number2=1;
    let temp;
    while(fibo>=0)
    {
        temp=number2;
        number2+=number1;
        number1=temp;
        fibo--;
        document.write(number1);
        document.write('<br>');
    }

}