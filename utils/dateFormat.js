module.exports = (timestamp) => {
    const dateObj = new Date(timestamp);

    const months = [ 
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const monthFormatted = months[dateObj.getMonth()];
        const dayOfMonth = dateObj.getDate();
        const year =  dateObj.getFullYear();
    

        let hour = dateObj.getHours();
        const minute = (dateObj.getMinutes()  < 10 ? '0 ': '') + dateObj.getMinutes();

        const periodOfDay = hour>= 12 ? 'pm' : 'am';

        hour = hour > 12 ?  hour - 12: hour ;
        hour = hour ===0 ?  12: hour;

        const formattedDate = `${monthFormatted} ${dayOfMonth}, ${year}  at ${hour}:${minute} ${periodOfDay}`;

        return  formattedDate;

    };