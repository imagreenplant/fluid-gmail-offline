// Adds the ability to delete emails by pressing the delete key for Gmail Offline
console.log('Fluid userscript started: Delete Key for Gmail');

function deleteGmailMessage() {
    //Enact Gmail's delete javascript
    _e(event,'f',9);
}

document.addEventListener('keydown', function(event) { 
    if(event.keyIdentifier == "U+0008") {
        deleteGmailMessage();
    }
});

