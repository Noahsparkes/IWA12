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

const status = selector('status');
const reserve = selector('reserve');
const checkout = selector('checkout');
const checkin = selector('checkin');


status[0].style.color = STATUS_MAP.status.color;
reserve[0].disabled = STATUS_MAP.status.canReserver ? false : true;
checkout[0].disabled = STATUS_MAP.status.canCheckout ? false : true;
checkin[0].disabled = STATUS_MAP.status.canCheckIn ? false : true;


status[1].style.color = STATUS_MAP.status.color;
reserve[1] = STATUS_MAP.status.canReserver ? false : true;
checkout[1] = STATUS_MAP.status.canCheckout ? false : true;
checkin[1] = STATUS_MAP.status.canCheckIn ? false : true;


status[2].style.color = STATUS_MAP.status.color
reserve[2].disabled = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout[2].disabled = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin[2].disabled = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'