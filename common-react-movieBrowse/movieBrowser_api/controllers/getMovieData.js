import axios from 'axios';
import fs from 'fs';


function getMovieData(req,res) {
    console.log(req.body);
    
    let name = req.body;

    var options = {
        method: 'GET',
        url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${name}`,
        headers: {
            'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
            'x-rapidapi-key': '8dc592532amsh7bb4b0415b41462p1f11b2jsn7b79a4d222da'
        }
    };

    axios.request(options).then(function(response) {
        let movieData = JSON.stringify( response.data)

        fs.writeFileSync(`${__dirname}/../public/jsonFiles/movieDataJson.json`, movieData)
    }).catch(function(error) {
        console.error(error);
    });

}

export default getMovieData;