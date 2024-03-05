// const tripRepository = require('../repository/trip.repository');
import { createNewTrip,getTripsByIds } from "../repository/trip.repository";

// Create Trip
export function createTrip(newTrip:any,callBack:any){

    createNewTrip(newTrip,(isSaved:boolean)=>{
        callBack(isSaved);
    });

}

// Get trips by user and category ids
export function getTripsByUserAndCategoryIds(userId:any,categoryId:any,callBack:any){
    getTripsByIds(userId,categoryId,(data:any)=>{
        callBack(data);
    })
}