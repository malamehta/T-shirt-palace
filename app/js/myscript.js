var allNotifications=['10% off Sitewide Use code TEN10 + Free Shipping $99','notification 1','notification2','notification 3'];
i=0;
function chngNotification(){
    document.getElementById("notifications").innerHTML=allNotifications[i];
    if(i<(allNotifications.length-1)){
        i++;
    }else{
        i=0;
    }
}
setInterval(chngNotification,2000);

// ==========hamberg menu============
const show = () => {
    document.getElementById('hamberg-menu').style.left = "-45px";
    document.getElementById('show-btn').style.display = "none";
    document.getElementById('hide-btn').style.display = "block";
  }
  const hide = () => {
    document.getElementById('hamberg-menu').style.left = "-120%";
    document.getElementById('show-btn').style.display = "block";
    document.getElementById('hide-btn').style.display = "none";
  }
