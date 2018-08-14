
const calendarHeadings = () => {
    let daysRow = document.querySelector('.main-calendar-grid__headings__days');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for( let i = 0; i< 7 ; i++) {
        let createDiv = document.createElement('div');
        createDiv.className = "calendarHeading";
        createDiv.innerHTML = "<span>"+ days[i]+"</span><h1>"+(i+11)+"</h1>";
        daysRow.appendChild(createDiv);
    }
}



export default calendarHeadings;