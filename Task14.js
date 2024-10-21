function timesAgo(postDateString) {
    // Split the date and time parts
    const [datePart, timePart] = postDateString.split(' '); // Split by the space between date and time
    
    // Split date into day, month, year
    const [day, month, year] = datePart.split('/'); // Split the date by '/'
    const [hours, minutes, seconds] = timePart.split('.'); // Split time by '.'
    // Create a new Date object
    const postDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
    const now = new Date();
    const diffInSeconds = Math.floor((now - postDate) / 1000); // Time difference in seconds
    // Calculate time units
    const totalSeconds = diffInSeconds;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const months = now.getMonth() - postDate.getMonth() + (12 * (now.getFullYear() - postDate.getFullYear()));
    const years = now.getFullYear() - postDate.getFullYear();
    if (totalSeconds < 60) {
        return `${totalSeconds} seconds ago`;
    } else if (totalMinutes < 60) {
        return `${totalMinutes} minutes ago`;
    } else if (totalHours < 24) {
        return `${totalHours} hours ago`;
    } else if (totalDays < 30) {
        return `${totalDays} days ago`;
    } else if (months < 12) {
        return `${months} months ago`;
    } else {
        return `${years} years ago`;
    }
}
const postDate = '01/01/2022 15.30.22';  // Example in dd/mm/yyyy hh.mm.ss format
console.log(timesAgo(postDate));  // Output will depend on the current date
