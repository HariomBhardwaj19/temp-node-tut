const os = require("os")
//about the user of the system
const user = os.userInfo()
console.log(user)
//system uptime(in seconds)
console.log(`the system uptime is ${os.uptime()} seconds`)
//all info about system.

const currentOS = {
    name : os.type(),
    release:  os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)