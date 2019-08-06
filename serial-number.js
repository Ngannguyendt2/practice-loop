function serial() {
    for(let i=1;i<=100;i++)
    {
        document.write(i);
        document.write('<br>');
        if(i==99){
            alert("Successful");
            break;
        }
    }

}