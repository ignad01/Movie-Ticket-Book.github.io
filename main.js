const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = parseInt(movieSelect.value);

// update tota and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatCount = selectedSeats.length;
    
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount*ticketPrice;
}

//Movie select event
movieSelect.addEventListener('change', (eve)=>{
    ticketPrice = parseInt(eve.target.value);
    updateSelectedCount();
});

//Seat click event
container.addEventListener('click', (eve)=>{
    if(eve.target.classList.contains('seat') && !eve.target.classList.contains('occupied')){
        eve.target.classList.toggle('selected');
        updateSelectedCount();
    }
});