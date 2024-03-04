const categoryRepository = require('../repository/category.repository');

function getAll(callBack){

    categoryRepository.getAllCategory(function(data){

        callBack(data)
    });
}

module.exports.getAll = getAll;