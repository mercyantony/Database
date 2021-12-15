// this is wrong!!!
const p = fetch("sdhgks")
p.then((data) => doStuff(data))
p.then((data) => doMoreStuff(data))

// this is correct
const p1 = fetch("sdhgks")
const p2 = p1.then((data) => doStuff(data))
p2.then((data) => doMoreStuff(data))

// this is even better
fetch("sdhgks")
    .then((data) => doStuff(data))
    .then((data) => doMoreStuff(data))
