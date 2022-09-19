let message = "Bonjour Corentin";


alert(addDateTime(message));

function addDateTime(message) {
    const dateTimeNow = new Date();
    return dateTimeNow.toLocaleDateString() + ' ' + dateTimeNow.toLocaleTimeString() + ' ' + message; 
}