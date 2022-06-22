const CrossProcessExports = require('electron')
const {app, BrowserWindow }= require('electron')
const path = require('path')
function createWindow(){
    const win =new BrowserWindow({
        width:800,
        height:600
    })
    win.loadFile('index.html')
}
app.whenReady().then(() =>{
    createWindow()
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length===
        0){
            createWindow()
        }
    })
})
app.on('Window-all-closed',()=>{
    if(CrossProcessExports.plataform !=='darwin') {
        app.quit()
    }
})

