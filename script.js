// Date & Time

function timeDate() {
    const dt = new Date();
    document.getElementById('dt1').innerText = dt.toLocaleString();     // Only Date & Time
}
timeDate();
setInterval(timeDate, 1000);


// email alert
function MsgAlert(){
            alert('You are about to send an email to info@khulnapaperweb.com');
        }


// call confirmation
function MsgConfirm(){
            confirm('Do you want to make a call?');
        }
