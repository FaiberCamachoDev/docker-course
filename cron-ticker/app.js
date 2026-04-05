const cron = require('node-cron');
let times = 0;
cron.schedule('1-59/5 * * * * * *', () => {
    times++;
    console.log('msg each 5 seconds', times);
});

console.log("start");