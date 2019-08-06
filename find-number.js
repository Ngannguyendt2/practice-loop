function findnum(fibo) {
    let number1=0,number2=1;
    let temp;
    while(fibo>=0)
    {
        temp=number2;
        number2+=number1;
        number1=temp;
        if(number1%5==0)
        {
            document.write('The first number of the sequency divided 5 is '+number1);
            break;
        }
        fibo--;


    }

}