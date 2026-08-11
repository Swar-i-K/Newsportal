function timeDate {
    const dt = newDate();
    document.getElementById('dt3').innerText = dt.toLocaleString();     // Only Date & Time
}
timeDate();
setInterval(timeDate, 1000);
