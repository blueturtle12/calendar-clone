const calendarGrid = () => {
    let hoursGrid = document.querySelector('.main-calendar-grid__presentation');
    const dates = [['Sun<br/>29','Mon<br/>30','Tue<br/>31','Wed<br/>Aug1','Thu<br/>2','Fri<br/>3','Sat<br/>4'],
                ['5','6','7','8','9','10','11'],
                ['12','13','14','15','16','17','18'],
                ['19','20','21','22','23','24','25'],
                ['26','27','28','29','30','31','sep1']];
                
    const closeModal = (modal) => {
        modal.classList.remove("modal-window");
        modal.classList.add("modal-window--closed");
    }
    const openModal = (modal) => {
        modal.classList.remove("modal-window--closed");
        modal.classList.add("modal-window");
    }

    for(let j = 0 ; j < 5 ; j++) {
        let createDiv = document.createElement('div');
        createDiv.className = "grind__presentation__row";
        for( let i = 0; i< 7 ; i++) {
            let createBox = document.createElement('div');
            createBox.className = "grid__presentation__hour";
            createBox.innerHTML = "<h5 class='presentation__hour__dates'>"+dates[j][i]+"</h5>"
            let dailyEvent = document.createElement('a');
            dailyEvent.className = "day__event";
            dailyEvent.innerHTML = "open modal";
            let modalContainer = document.querySelector("#modal");
            
            if( (i === 1 && j === 0) || (i === 5 && j === 4) || (i === 3 && j === 2) ) {

                createBox.appendChild(dailyEvent);

                dailyEvent.addEventListener("click", () => {
                    createBox.appendChild(modalContainer);
                    openModal(modalContainer);
                });
                window.addEventListener('click', (e)=> {
                    if(e.target == modalContainer) {
                        closeModal(modalContainer);
                    }
                });

                let modalCloseButton = document.querySelector('.modal-close'); 
                modalCloseButton.addEventListener("click", () => {
                    closeModal(modalContainer);
                });

            }
            
            createDiv.appendChild(createBox);
        }
        hoursGrid.appendChild(createDiv);
    }   
}



export default calendarGrid;