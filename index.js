function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

// Checks the case of a string to see if it's all caps or not.
function caseChecker(input) {
    if (input === input.toUpperCase()) {
        return true;
    }
    if (input !== input.toUpperCase()) {
        return false;
    }
}

function sayHiToHeadphonedRoommate(string) {
    if (string === 'Let\'s have dinner together!') {
        return 'I would love to!';
    }
    else if (caseChecker(string) === true) {
        return 'YES INDEED!';
    }
        else {
            return 'I can\'t hear you!';
        }
}
sayHiToHeadphonedRoommate('Let\'s have dinner together!');