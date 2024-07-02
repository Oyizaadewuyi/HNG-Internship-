document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const utcTime=
        now.toUTCString();
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ];
        const currentDay = 
        days[now.getUTCDay()];

        document.getElementById('currentTimeUTC').textContent =utcTime;

        document.getElementById('currentDay').textContent =currentDay;
    }
    updateTime();
    setInterval(updateTime,60000);//update every minutes


    });