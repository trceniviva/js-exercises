states = [
    'AL','AR','KY','PA','NY','NC','RI','NH','NC','TX','CA','WA','OR','OK','OH',
    'MA','MN','MO','ME'
]

cities = [
    'Washington', 'New York', 'Arlington', 'Horsham', 'Bryn  Mawr',
    'Ambler', 'Seattle','Portland'
]

streetName = [
    'Norristown Rd','Van St','Dekalb Ave','Limekiln Pike','Wootton Rd',
    'Astor Pl','Eades St', 'Broadway', '6th Ave'
]

streetNum = [
    1221, 1209, 2122, 442, 1232, 961, 770, 1153
]

zipCodes = [
    20003, 19044, 19010, 19002, 11221, 10003
]

const addressOutput = document.getElementById("address-here")

function randomAddress() {
    let randStNum = streetNum[Math.floor(Math.random()*streetNum.length)];
    let randStreet = streetName[Math.floor(Math.random()*streetName.length)];
    let randCity = cities[Math.floor(Math.random()*cities.length)];
    let randState = states[Math.floor(Math.random()*states.length)];
    let randZip = zipCodes[Math.floor(Math.random()*zipCodes.length)];
    let address = randStNum + " " + randStreet + ", " + randCity + ", " + randState + " " + randZip;
    addressOutput.innerHTML = address;
}