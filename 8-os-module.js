// OS Module (operating system)
// Setup
//const { os } = require("os"); // destuct it
import {
  userInfo,
  uptime,
  type,
  release as _release,
  totalmem,
  freemem,
} from "os";

// info about current user
const user = userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`THe System Uptime is ${uptime()} seconds`);

const currentOS = {
  name: type(),
  release: _release(),
  totalMem: totalmem(),
  freeMem: freemem(),
};
// Info about the current operating system
console.log(currentOS);
