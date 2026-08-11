function timeDate {
    const dt = newDate();
    document.getElementById('dt1').innerText = dt.toLocaleString();     // Only Date & Time
}
timeDate();
setInterval(timeDate, 1000);
