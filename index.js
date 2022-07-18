function callback() {
    return 10;
};

function receivesAFunction(callback) {
    return callback();

}

const bank = callback;

function returnsANamedFunction(){
    return bank;
}

function returnsAnAnonymousFunction(){
    return function () {
        return 1 + 1;
    }
}