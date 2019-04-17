const {app, BrowserWindow} = require("electron");
const log = val => console.log(val); // or use const log = console.log; i rather not.
const createWindow = () => {
   const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Http Requester"
    });
    win.loadFile("./src/index.html");
}
app.on("ready", createWindow);
