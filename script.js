function timeDate() {
    const dt = new Date();
    document.getElementById('dt1').innerText = dt.toLocaleString();     // Only Date & Time
}
timeDate();
setInterval(timeDate, 1000);
