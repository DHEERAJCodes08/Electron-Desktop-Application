const{app , BrowserWindow} = require('electron');

//Now Creating the CreateWindow() to Load the  index.html file in the BrowserWindow
const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        
    })

    window.loadFile('my-electron-app/index.html')  //But it will not be loaded until the app is  fired
};

//In the Electron the Window Can only be created after the app module event is fired

//So we will be Calling the CreateWindow fun when the app module is Redy
app.whenReady().then(() => {
    createWindow();
    console.log('Window Creted Success ');
})



//Now usually the Windows in the MAC OS keeps running in the background , due to this functanility of the MacOS
//we need to perform and Condition Check ie 
//if the System is Mac OS then its (darwin) or Windows its (win32)
//So we are adding an event handler ie window-all-closed which check weather all windows are closed

app.on("window-all-closed", ()=>{
    if(process.platform !== "darwin")app.quit();
})

//process.platform is to Check if the the system is Mac OS or Windows
//so if the system is Mac OS then its running in the background as the default working of the Mac OS
//so if the system is other than Mac OS then it quits 


