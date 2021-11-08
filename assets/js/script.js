const renderCurrentDate = () =>
{
    const dateTime = $("#currentDay");
    const displayNow = moment().format("dddd, MMM Do YYYY");
    dateTime.text(displayNow);
};
renderCurrentDate()
// add a class to each element 
// 