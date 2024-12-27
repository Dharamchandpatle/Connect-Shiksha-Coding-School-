
export const getDate=(originalDateString)=>{
    if (!originalDateString) {
        return '';
    }
    const date = new Date(originalDateString);

    // Extract the date part (YYYY-MM-DD) from the Date object
    const formattedDate = date.toISOString().split('T')[0];

    // Return the formatted date
    return formattedDate;
}