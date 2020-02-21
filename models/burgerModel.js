const orm = require("../config/orm.js");

const burger = {

  selectAll : (callback) => {

    orm.selectAll("burgers", (results)=>{
      callback(results);
    });

  },

  insertOne : (cols, vals, callback) => {

    orm.insertOne("burgers", cols, vals, (result)=>{
      console.log("Insert Model");
      callback(result);
    });

  },

  updateOne : (cols, vals, condition, callback) =>{

    console.log("Update Model");

    orm.updateOne("burgers", cols, vals, condition, (result)=>{
      console.log("Executing CallBack");
      callback(result);
    });

  }

};

module.exports = burger;
