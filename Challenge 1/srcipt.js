 // scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// Select DOM elements
const status = document.querySelector('.status');
const reserve = document.querySelector('.reserve');
const checkout = document.querySelector('.checkout');
const checkin = document.querySelector('.checkin');

// Update status, color, and enable/disable buttons based on STATUS_MAP
status.textContent = 'shelf';
status.style.color = STATUS_MAP[status.textContent].color;

reserve.disabled = !STATUS_MAP[status.textContent].canReserve;
checkout.disabled = !STATUS_MAP[status.textContent].canCheckout;
checkin.disabled = !STATUS_MAP[status.textContent].canCheckIn;

// Add event listeners for status change
status.addEventListener('change', function() {
    const selectedStatus = this.value;

    // Update status, color, and enable/disable buttons based on selected status
    status.style.color = STATUS_MAP[selectedStatus].color;
    reserve.disabled = !STATUS_MAP[selectedStatus].canReserve;
    checkout.disabled = !STATUS_MAP[selectedStatus].canCheckout;
    checkin.disabled = !STATUS_MAP[selectedStatus].canCheckIn;
});