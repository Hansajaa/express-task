// const categoryRepository = require('../repository/category.repository');
import { getAllCategory } from "../repository/category.repository";



export function getAll(callBack:any){

    getAllCategory(function(data:any){

        callBack(data)
        
    });
}

