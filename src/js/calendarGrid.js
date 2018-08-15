const calendarGrid = () => {
    let hoursGrid = document.querySelector('.main-calendar-grid__presentation');
    const dates = [['Sun<br/>29','Mon<br/>30','Tue<br/>31','Wed<br/>Aug1','Thu<br/>2','Fri<br/>3','Sat<br/>4'],
                ['5','6','7','8','9','10','11'],
                ['12','13','14','15','16','17','18'],
                ['19','20','21','22','23','24','25'],
                ['26','27','28','29','30','31','sep1']];


    for(let j = 0 ; j < 5 ; j++) {
        let createDiv = document.createElement('div');
        createDiv.className = "grind__presentation__row";
        for( let i = 0; i< 7 ; i++) {
            let createBox = document.createElement('div');
            createBox.className = "grid__presentation__hour";
            //createDiv.innerHTML = "test";
            createBox.innerHTML = "<h5 class='presentation__hour__dates'>"+dates[j][i]+"</h5>";
            createDiv.appendChild(createBox);
        }
        hoursGrid.appendChild(createDiv);
    }
}



export default calendarGrid;