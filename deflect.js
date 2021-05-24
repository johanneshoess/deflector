console.log('START PLUGIN  -> ' + window.location.href)

function blurPage(radius){
    document.body.style.filter = `blur(${radius}px)`;
}


var url = window.location.href;

let blocklist = {
    dayily: ["reddit.com", "sueddeutsche.de", "twitter", "bildblog"]
}

var isBlock = blocklist.dayily.find(block => url.includes(block));

if(isBlock){
    console.log('IST ENTHALTEN ----->>>>' + isBlock)


    var blurRadius = 0;
    
    setTimeout(function(){ 
        setInterval(function(){ blurPage(blurRadius); blurRadius++; }, 3000);
     }, 10000);
}





/*

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

*/