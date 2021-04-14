const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the database
mongoose.connect('mongodb://localhost:27017/stitches', {
  useNewUrlParser: true
});


const artistSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    location: String,
    employed: String,
})

const Artist = mongoose.model('Artist', artistSchema);

// Create an Artist
app.post('/api/artists', async (req, res) => {
    const artist = new Artist({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      location: req.body.location,
      employed: req.body.employed
    });
    try {
      await artist.save();
      res.send(artist);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

//Get a list of all Artists
app.get('/api/artists', async (req, res) => {
try {
    let artists = await Artist.find();
    res.send(artists);
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
});

//Get an individual Artist
app.get('/api/artist/:id', async (req, res) => {
    try{
        let artist = await Artist.findOne({
            _id: req.params.id
        });
        res.send(artist);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Delete an Artist
app.delete('/api/artists/:id', async (req, res) =>{
    try {
        let artist = await Artist.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Edit an Artist
app.put('/api/artists/:id', async (req, res) =>{
    try{
        let artist = await Artist.findOne({
            _id: req.params.id
        });
        if (!artist) {
            res.send(404);
            return;
        }
        artist.fname =  req.body.fname
        artist.lname = req.body.lname
        artist.email =  req.body.email
        artist.location =  req.body.location
        artist.employed =  req.body.employed
        artist.save()
        res.sendStatus(200);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})



// Items Schema 
const itemSchema = new mongoose.Schema({
    name: String,
    email: String,
    state: String,
    city: String,
    address: String,
    zip: String,
    color: String,
    size: String,
    uni: String,
    status: String,
    artist: {
        type: mongoose.Schema.ObjectId,
        ref: 'Artist'
    }
  });

const Item = mongoose.model('Item', itemSchema);

// Add an Item
app.post('/api/:artistID/items', async (req, res) => {
    let artist = await Artist.findOne({
        _id: req.params.artistID
    });
    if (!artist) {
        res.send(404);
        return;
    }

    let item = new Item({
        name: req.body.name,
        email: req.body.email,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
        zip: req.body.zip,
        color: req.body.color,
        size: req.body.size,
        uni: req.body.uni,
        status: req.body.status,
        artist: artist,
    });
    try {
        await item.save();
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all items
app.get('/api/items', async (req, res) => {
    try {
        let items = await Item.find().populate('artist');
        res.send(items);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all items for a single artist
app.get('/api/artists/:artistID/items', async (req, res) => {
    try {
        let artist = await Artist.findOne({_id: req.params.artistID});
        if (!artist) {
            res.send(404);
            return;
        }

        let items = await Item.find({artist:artist});
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a single item
app.get('/api/items/:id', async (req,res) => {
    try {
        let items = await Item.findOne({
            _id: req.params.id  
        });
        res.send(items);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Delete an item
app.delete('/api/items/:id', async (req, res) =>{
    try {
        let items = await Item.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Edit an item (need to change this to incorporate artists)
app.put('/api/:artistID/items/:id', async (req,res) =>{
    try {
        let artist = await Artist.findOne({
            _id: req.params.artistID
        });
        if (!artist) {
            res.send(404);
            return;
        }

        let item = await Item.findOne({
            _id: req.params.id
        })
        item.name =  req.body.name
        item.email =  req.body.email
        item.state =  req.body.state
        item.city =  req.body.city
        item.address =  req.body.address
        item.zip =  req.body.zip
        item.color =  req.body.color
        item.size =  req.body.size
        item.uni =  req.body.uni
        item.status =  req.body.status
        item.artist =  artist
        item.save()
        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));