const tripRepository = require('../repository/trip.repository');

// Create Trip
function createTrip(newTrip,callBack){

    tripRepository.createTrip(newTrip,(isSaved)=>{
        callBack(isSaved);
    });

}

// Get trips by user and category ids
function getTripsByUserAndCategoryIds(userId,categoryId,callBack){
    tripRepository.getTripsByIds(userId,categoryId,(data)=>{
        callBack(data);
    })
}

module.exports = {
    createTrip:createTrip,
    getTripsByUserAndCategoryIds:getTripsByUserAndCategoryIds
}