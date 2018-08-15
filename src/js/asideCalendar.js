const asideCalendar = () => {
    let asideDates = document.querySelector('.aside__calendar__container');
    const dates = [['S','M','T','W','T','F','S'],
                ['29','30','31','1','2','3','4'],
                ['5','6','7','8','9','10','11'],
                ['12','13','14','15','16','17','18'],
                ['19','20','21','22','23','24','25'],
                ['26','27','28','29','30','31','sep1']];


    for(let j = 0 ; j < 6 ; j++) {
        let createDiv = document.createElement('div');
        createDiv.className = "container__row";
        for( let i = 0; i< 7 ; i++) {
            let createSpan = document.createElement('div');
            createSpan.className = "container__row__span";
            createSpan.innerHTML = "<span class='span__date'>"+dates[j][i]+"</span>";
            createDiv.appendChild(createSpan);
        }
        asideDates.appendChild(createDiv);
    }
}



export default asideCalendar;