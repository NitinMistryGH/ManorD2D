const faker = require('faker/locale/en_GB');

const generateAddresses = count => {
    let addresses = [];

    for(let id = 0; id < count; id++) {
        const postcode = faker.address.zipCode();
        const streetName = faker.address.streetName();
        const lastVisited = faker.date.past();
        addresses.push({
            "postcode": postcode,
            "streetName": streetName,
            "lastVisited": lastVisited
        })
    }

    return addresses;
};

module.exports = generateAddresses(100);