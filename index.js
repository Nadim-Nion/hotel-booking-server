const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qf8hqc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const database = client.db('airbnbDB');
        const hotelCollection = database.collection('hotelsThree');

        /*---------------------------------------------- 
                Hotel Collection API
        -----------------------------------------------*/

        // Load all hotels data
        app.get('/hotels', async (req, res) => {
            const cursor = hotelCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        // Load hotels data based on their category and search parameters
        app.get('/hotels/:category', async (req, res) => {
            const category = req.params.category;
            const { destination, checkInDate, checkOutDate, guests } = req.query;
            const { adults, children, infants, pets } = guests;


            let query = {};

            if (category) {
                query.category = category;
            };

            if (destination) {
                query.hotelDestination = destination;
            };

            if (checkInDate && checkOutDate) {
                const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Dhaka' };
                const formattedCheckInDate = new Date(checkInDate).toLocaleDateString('en-CA', options);
                const formattedCheckOutDate = new Date(checkOutDate).toLocaleDateString('en-CA', options);

                query.checkIn = { $lte: formattedCheckInDate };
                query.checkOut = { $gte: formattedCheckOutDate };
            };


            if (adults) {
                query['guestCapacity.adult'] = { $gte: parseInt(adults) };
            }

            if (children) {
                query['guestCapacity.child'] = { $gte: parseInt(children) };
            }

            if (infants) {
                query['guestCapacity.infant'] = { $gte: parseInt(infants) };
            }

            if (pets) {
                query['guestCapacity.pets'] = { $gte: parseInt(pets) };
            }


            const cursor = hotelCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Airbnb is running');
});

app.listen(port, () => {
    console.log(`Airbnb is running on the PORT: ${port}`);
});