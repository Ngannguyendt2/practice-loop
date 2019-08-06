function print() {
    let number;
    for (let i = 1; i <= 100; i++) {
        number = i;
        if ((number % 3 == 0) && (number % 5) == 0) {
            document.write(number + ' FizzBuzz');
            document.write('<br>');
        } else if (number % 3 == 0) {
            document.write(number + ' Fizz');
            document.write('<br>');
        } else if (number % 5 == 0) {
            document.write(number + ' Buzz');
            document.write('<br>');
        } else {
            document.write(number);
            document.write('<br>');
        }
    }
}