function caseChecker(input) {
    if (input === input.toUpperCase()) {
        console.log("True");
        return true;
    }
    if (input !== input.toUpperCase()) {
        console.log("False");
        return false;
    }
}

caseChecker("HELLO");
