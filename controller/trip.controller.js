const tripRepository = require('../repository/trip.repository');


function createTrip(newTrip,callBack){

    tripRepository.createTrip(newTrip,(isSaved)=>{
        callBack(isSaved);
    });

}

module.exports.createTrip = createTrip;