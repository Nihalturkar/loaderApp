export const formatDate=(date)=>{
    // console.log("date: ", date);
    date = new Date(date)

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    let month = months[date.getMonth()]
    let day = days[date.getDay()]
    let d = date.getDate()
    let year = String(date.getFullYear())
     var dateString = `${d} ${month} ${year}`;
    //  console.log(dateString)
     return dateString;
  }



const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formattedDateServer = function (d = new Date()) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return `${year}-${month}-${day}`;
    // return `${day}/${month}/${year}`;
};



export const formattedDate3 = function (d = new Date()) {
    let month = String(d.getMonth());
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return `${day} ${months[d.getMonth()]} ${year}`;
};


export const formatAMPM = (date) => {

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}