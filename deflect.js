console.log('START PLUGIN')


let blocklist = {
    dayily: ["*://*.reddit.com/*", "*://*.sueddeutsche.de/*"]
}

function setItem() {
    console.log("OK - set");
}

function gotBlocklist(list) {
    list.array.forEach(element => {
        console.log(`Blocklist: ${element}`);
    });
}

function onError(error) {
    console.log(error)
}

// store the objects
browser.storage.local.set({ blocklist })
    .then(setItem, onError);



let settingItem = browser.storage.local.get("blocklist")
    .then(gotBlocklist, onError);