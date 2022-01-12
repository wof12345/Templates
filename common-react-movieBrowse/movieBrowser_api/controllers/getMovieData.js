import axios from 'axios';
import fs from 'fs';

function getMovieData(name) {

    const __dirname = `C:\\Users\\Temporary\\Documents\\TempProjects\\Templates\\common-react-movieBrowse\\movieBrowser_api`

    let data = JSON.parse(
        fs.readFileSync(`${__dirname}/public/jsonFiles/movieDataJson.json`)
    );

    console.log(data);

    // var options = {
    //     method: 'GET',
    //     url: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception',
    //     headers: {
    //         'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
    //         'x-rapidapi-key': '8dc592532amsh7bb4b0415b41462p1f11b2jsn7b79a4d222da'
    //     }
    // };

    // axios.request(options).then(function(response) {
    //     console.log(response.data);
    // }).catch(function(error) {
    //     console.error(error);
    // });
}

export default getMovieData;