import express from "express";

const app = express()
app.use(express.json())
const port = 3000;

const locations = [
    { id:"DH01", disasterType: "Earthquake",  rangeInKm: 15, latitude: 28.613939, longitude: 77.209023},
    { id:"DM02", disasterType: "Flood", rangeInKm: 4, latitude: 19.076090, longitude: 72.877426},
    { id:"DL03", disasterType: "Cyclone", rangeInKm: 3, latitude: 13.082680, longitude: 80.270721},
    { id:"DH04", disasterType: "Fire",  rangeInKm: 14, latitude: 22.572645, longitude: 88.363892},
    { id:"DM05", disasterType: "Earthquake", rangeInKm: 8, latitude: 12.971599, longitude: 77.594566},
    { id:"DH07", disasterType: "Cyclone", rangeInKm: 15, latitude: 18.520430, longitude: 73.856743},
    { id:"DM08", disasterType: "Fire", rangeInKm: 6, latitude: 23.022505, longitude: 72.571365},
    { id:"DL09", disasterType: "Earthquake", rangeInKm: 2, latitude: 26.912434, longitude: 75.787270},
    { id:"DH10", disasterType: "Flood",  rangeInKm: 10, latitude: 26.846695, longitude: 80.946167},
    { id:"DM11", disasterType: "Cyclone", rangeInKm: 7, latitude: 21.145800, longitude: 79.088158},
    { id:"DL12", disasterType: "Fire", rangeInKm: 3, latitude: 22.719568, longitude: 75.857727},
    { id:"DH13", disasterType: "Earthquake",  rangeInKm: 11, latitude: 23.259933, longitude: 77.412613},
    { id:"DM14", disasterType: "Flood", rangeInKm: 5, latitude: 17.686816, longitude: 83.218483},
    { id:"DL15", disasterType: "Cyclone", rangeInKm: 2, latitude: 25.594095, longitude: 85.137566}
];

function getRandomDisasters() {
    const randomCount = Math.floor(Math.random() * 5);
    
    if (randomCount === 0) {
        return [];
    }
    
    const shuffled = [...locations].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
}

app.get('/api/disasters', (req, res) => {
    const disasters = getRandomDisasters();
    
    res.json({
        count: disasters.length,
        disasters: disasters,
    });
});

app.get("/", (req,res)=>{
    res.send("Hello Rudra!")
})

app.listen(port,()=>console.log(`Server running on PORT ${port}`));