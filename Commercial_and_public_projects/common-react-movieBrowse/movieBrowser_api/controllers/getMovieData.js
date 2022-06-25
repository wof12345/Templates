import axios from "axios";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getMovieData(req, res) {
  let movieData = {};
  let gottenData = {};
  let name = req.body.data;
  name = name.charAt(0).toUpperCase() + name.slice(1);

  console.log(name);

  let data = JSON.parse(
    fs.readFileSync(`${__dirname}/../public/jsonFiles/movieDataJson.json`)
  );

  let dataExists = data.titles?.find((titleName) => {
    // console.log(titleName.title, name);

    return titleName.title.includes(name);
  });
  console.log(dataExists);

  if (!dataExists) {
    var options = {
      method: "GET",
      url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${name}`,
      headers: {
        "x-rapidapi-host":
          "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "8dc592532amsh7bb4b0415b41462p1f11b2jsn7b79a4d222da",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        gottenData = response.data;
        movieData = JSON.stringify(movieData);
        console.log(movieData);

        fs.writeFileSync(
          `${__dirname}/../public/jsonFiles/movieDataJson.json`,
          movieData
        );
        res.json(gottenData);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    console.log("exists");
    gottenData = data;
    res.json(gottenData);
  }
  // console.log(gottenData);
}

export function readMovieData(req, res) {
  let data = JSON.parse(
    fs.readFileSync(`${__dirname}/../public/jsonFiles/movieDataJson.json`)
  );
  console.log(data);

  res.json(data);
}
