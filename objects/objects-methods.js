let restaurant = {
  name: 'Loyola',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    // console.log(this); // {name: 'Loyola', guestCapacity: 75, guestCount: 0, checkAvailability: [Function: checkAvailability]}
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  }
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4)); // false
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4)); // true