function guessNumber() {

    let flag = true;
    while (flag) {
        let number = Number(prompt('import number'));
        let guess = Math.floor(Math.random() * 11);
        if (number == guess) {
            alert("Congratulations ");
            flag = false;

        } else {
            alert("Sorry! You lose.Number random is " + guess);

        }
    }

}