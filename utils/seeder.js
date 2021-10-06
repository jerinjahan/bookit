const Room = require('../models/room');
const mongoose = require('mongoose');
const rooms =  require('../data/rooms');

const seedRooms = async () => {
    try {
        mongoose.connect(`mongodb+srv://admin:mjI9fL6nQJKpAGsh@cluster0.nbvob.mongodb.net/bookit?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        await Room.deleteMany();
        console.log('Rooms are deleted');

        await Room.insertMany(rooms);
        console.log('All rooms are inserted');

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedRooms();