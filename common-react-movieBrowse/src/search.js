import fs from 'fs';

export function search(name){
    console.log(name);
    let data = JSON.parse(
        fs.readFileSync(`${__dirname}/movieBrowser_api/public/jsonFiles/movieDataJson.json`)
    );

    let dataExists = data.titles.find((titleName)=>{return titleName.title===name});
    
if(!dataExists){   
    fetch(`http://localhost:3000/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(name),
    })
    .then(response => response.json())
    .then(data => {
        let dataToRet = data;
        console.log(dataToRet);
    })
    .catch((error) => {
        console.log(error);
    });
}
}

export function update(event){
    this.setState({name:event.target.value})
}