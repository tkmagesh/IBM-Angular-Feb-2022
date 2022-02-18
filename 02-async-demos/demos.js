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

    //Async (using callbacks)
    function adddAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        },5000);
    }

    function adddAsyncClient(x,y){
        console.log(`[@client] invoking the service`);
        adddAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`)
        });
    }

    window['adddAsyncClient'] = adddAsyncClient;

    //async (using promises)
    function adddAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning result`);
                resolveFn(result);
            },5000);
        });
        return p;
    }

    window['adddAsyncPromise'] = adddAsyncPromise;

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = addSync(x,y);
        console.log(`[@client] result = ${result}`)
    }

   /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking service`);
        var p = adddAsyncPromise(100,200);
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
        });
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking service`);
        var result = await adddAsyncPromise(100,200);
        console.log(`[@client] result = ${result}`);
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;
    /* 
        promise
            - then(fn)
            - catch(fn)
    */
})();

function divideAsyncPromise(x,y){
    console.log(`   [@service] processing ${x} and ${y}`)
    var p = new Promise(function(resolveFn, rejectFn){
        setTimeout(function(){
            if (y === 0)
                return rejectFn(new Error('Cannot divide by zero'))
            const result = x / y;
            console.log(`   [@service] returning result`);
            resolveFn(result);
        },5000);
    });
    return p;
}

