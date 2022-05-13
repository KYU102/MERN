use useingmongodb

db.createCollection("students")

db.students.insert({name: "Kevin", home_state: "WA", lucky_number: "25", birthday: {month: "1", day: "1", year: "2000"}})

db.students.find()

db.students.find({home_state: "CA"})

db.students.find({lucky_number: {$gt: 3}})

db.students.find({lucky_number: {$lte: 10}})


db.students.find( { $and: [ { lucky_number: { $gt: 0 } }, { lucky_number: { $lt: 10 } } ] } )

db.students.updateMany( {} , {$set: {interests: ['coding', 'brunch', 'mongoDB']}})

db.students.update({name:"Kevin"} , {$push: {interests: "games"}}) 
db.students.update({name:"John"} , {$push: {interests: "taxes"}}) 

db.students.update({name:"John"} , {$pull: {interests: "taxes"}}) 

db.students.remove({home_state: "CA"})
db.students.remove({name: "David"}, true)
db.students.remove({lucky_number: {$gt: 5}}, true)

db.students.updateMany( {} , {$set: {number_of_belts: 0}})

db.students.updateMany( {home_state: "WA"} , {$inc: {belts_earned: 1}})

db.students.updateMany( {} , { $rename: { 'number_of_belts': 'belts_earned' } })

db.students.updateMany({}, { $unset : { lucky_number : 1} })

db.students.updateMany({}, {$currentDate: {updated_on: true}})