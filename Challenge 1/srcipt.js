
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

// Update the following lines to correctly select and update the elements

const statusElement = selector(status); // Update to select the correct element for status
const reserveElement = selector(reserve); // Update to select the correct element for reserve
const checkoutElement = selector(checkout); // Update to select the correct element for checkout
const checkinElement = selector(checkin); // Update to select the correct element for checkin

// Update the status text color and button enable/disable based on the status map

statusElement.style.color = STATUS_MAP[status].color; // Update to get the color from the status map
reserveElement.disabled = !STATUS_MAP[status].canReserve; // Update to get the canReserve value from the status map
checkoutElement.disabled = !STATUS_MAP[status].canCheckout; // Update to get the canCheckout value from the status map
checkinElement.disabled = !STATUS_MAP[status].canCheckIn; // Update to get the canCheckIn value from the status map
