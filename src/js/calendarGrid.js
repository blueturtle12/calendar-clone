const calendarGrid = () => {
    let hoursGrid = document.querySelector('.main-calendar-grid__presentation');
    const dates = [['Sun<br/>29','Mon<br/>30','Tue<br/>31','Wed<br/>Aug1','Thu<br/>2','Fri<br/>3','Sat<br/>4'],
                ['5','6','7','8','9','10','11'],
                ['12','13','14','15','16','17','18'],
                ['19','20','21','22','23','24','25'],
                ['26','27','28','29','30','31','sep1']];
                
    const closeModal = (modal) => {
        modal.style.bottom = "inherit";
        modal.style.right = "inherit";
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
            let dailyEvent = document.createElement('span');
            dailyEvent.className = "day__event";
            dailyEvent.innerHTML = "open modal";
   
            if( (i === 1 && j === 0) || (i === 5 && j === 4) || (i === 3 && j === 2) ) {

                createBox.appendChild(dailyEvent);
                
            }
            
            createDiv.appendChild(createBox);
        }
        hoursGrid.appendChild(createDiv);
    }
    let modalContainer = document.querySelector("#modal");
    hoursGrid.addEventListener("click", (e) => {
        if(e.target.className === "day__event") {
            modalContainer.classList.remove("modal-window--closed");
            modalContainer.classList.add("modal-window");
            e.target.parentNode.appendChild(modalContainer);
            let rect = modalContainer.getBoundingClientRect()
            if(rect.bottom >= window.innerHeight) {
                modalContainer.style.bottom = "0";
            } 
            if (rect.right >= window.innerWidth ) {
                modalContainer.style.right = "0";
            } 
            
        } 
    });
    
    hoursGrid.addEventListener("click", (e) => {
        if(e.target.className !== "modal-window" && e.target.className !== "day__event" ) {
            closeModal(modalContainer);
        } else if ( e.target.className === "modal-close" ) {
            closeModal(modalContainer);
        }

    });
}



export default calendarGrid;