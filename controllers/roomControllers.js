import Room from "../models/room";

const allRooms = async (req, res) => {

    try {
        const room = await Room.find();
        res.status(200).json({
            success : true,
            count:room.length,
            room
        })

    } catch (error) {
        res.status(400).json({
            success : true,
            error : error.message
        })
    }
}


// create new room   =>    /api/rooms

const newRoom = async (req,res) => {
    try {
        const room  = await Room.create(req.body);
        res.status(200).json({
            success : true,
            room
        })

    } catch (error) {
        res.status(400).json({
            success : true,
            error : error.message
        })
    }
}

export {
    allRooms,
    newRoom
}