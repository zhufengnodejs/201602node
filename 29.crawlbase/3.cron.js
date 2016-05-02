var CronJob = require('cron').CronJob;
// 秒 分钟 时 天 月 周
var job = new CronJob('1,3,5,7,9,11 * * 1 * *',function(){
    console.log(new Date().toLocaleString());
});
job.start();
/**
 * 5表示每5秒一次
 * 1-30表示在1到30秒内执行
 * 1,3,5,7 代表一个枚举值
 **/