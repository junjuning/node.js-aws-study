const members = require('./member');

function getFemale(memeber){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const data = members.filter()
            resolve(data);
        }, 500)

    })
}
