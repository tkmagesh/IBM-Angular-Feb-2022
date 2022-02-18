(() => {

    //Sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = addSync(x,y);
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    //Async
    function adddAsync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`);
            return result;
        },5000);
    }

    function adddAsyncClient(x,y){
        console.log(`[@client] invoking the service`);
        const result = adddAsync(x,y);
        console.log(`[@client] result = ${result}`)
    }

    window['adddAsyncClient'] = adddAsyncClient;



})();