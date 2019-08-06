function temperature() {
    let temp;
    do {
        temp = Number(prompt("Please import temperature!"));
        if(temp>100)
        {
            alert('Please reduce the temperature');
        }
        else if(temp <20)
        {
            alert('Please raise the temperature');
        }

    }
    while((temp > 100) || (temp < 20));
    document.write('Temperature: '+ temp);

}