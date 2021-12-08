const client = require("sqlclient")

client.connectToDb("sql.connolly.com,1433", (error) => {
    if (error) {
        return
    }

    console.log("connected to db now")

    client.queryData("SELECT * FROM myData", (data, error) => {
        if (error) {
            return
        }

        data.forEach((record) => {
            console.log(record)
        })

        const lastRecord = data[data.length - 1]

        client.queryData(
            `SELECT * FROM myOtherData WHERE dataId = ${lastRecord.id}`,
            (data, error) => {}
        )
    })
})

function connectToDb(connString) {
    const executor = (resolve, reject) => {
        client.connectToDb(connString, (error) => {
            // error && reject(errror) // same as if statement below
            if (error) {
                reject(error)
                return // not necessary because promises settle
            }
            resolve()
        })
    }

    const p = new Promise(executor)

    return p
}

function queryData(sqlCommand, ...params) {
    console.log(params[0], params[1])
    return new Promise((resolve, reject) => {
        client.queryData(
            sqlCommand,
            // { options: { params: params } }, // same as below
            { options: { params } },
            (data, error) => {
                if (error) {
                    reject(error)
                }
                resolve(data)
            }
        )
    })
}

connectToDb("sql.connolly.com,1433")
    .then(() => {
        return queryData("SELECT * FROM myData")
    })
    .then((data) => {
        data.forEach((record) => {
            console.log(record)
        })

        const lastRecord = data[data.length - 1]

        return queryData(
            "SELECT * FROM myOtherData WHERE dataId = ? AND catName = ? AND catFriendName = ?",
            lastRecord.id,
            "taco",
            "smokey"
        )
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
