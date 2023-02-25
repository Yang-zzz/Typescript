function filterString(x) {
    var testArray = [];
    x.forEach(function (a) {
        if (typeof a === "string") {
            testArray.push(parseInt(a));
        }
        else if (typeof a === "number") {
            testArray.push(a);
        }
    });
}