const calendarGrid = () => {
    let hoursGrid = document.querySelector('.main-calendar-grid__presentation');
    
    for(let j = 0 ; j < 24 ; j++) {
        let createDiv = document.createElement('div');
        for( let i = 0; i< 7 ; i++) {
            let createBox = document.createElement('div');
            createBox.className = "grid__presentation__hour";
            //createDiv.innerHTML = "test";
            createDiv.appendChild(createBox);
        }
        hoursGrid.appendChild(createDiv);
    }
}



export default calendarGrid;