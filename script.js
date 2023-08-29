document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let roomType = document.getElementById('roomType').value;
    let persons = parseInt(document.getElementById('persons').value);
    let ac = document.getElementById('ac').checked;
    let locker = document.getElementById('locker').checked;
    let food = document.getElementById('food').checked;

    let cost = 0;
    if (roomType === 'deluxe') {
        cost += 2500;
    } else {
        cost += 4000;
    }

    if (persons > 2) {
        cost += (persons - 2) * 1000;
    }

    if (ac) {
        cost += 1000;
    }

    if (locker) {
        cost += 300;
    }

    if (food) {
        cost += 1000;
    }

    alert(`Total cost: ${cost} rupee`);
});
