console.log("-----Welcome in JS-----");



const url =  "https://restcountries.com/v3.1/all";
const element = document.getElementById("container")

async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    
        for (let i = 0; i < data.length; i++) {
            const value = data[i];
            const html = `
            <div class='card'>
            <img src=${value?.flags?.png} />
            <h3>Name:
             ${value?.name?.common} 
            </h3>
           
            <div class='j'>
            <h3>Region:
             ${value?.region} 
            </h3>
            <h3>Population:
             ${value?.population} 
            </h3>
            
            <h3>Capital:
             ${value?.capital[0]} 
            </h3>
           
            <h3>
             ${value?.image}</h3>
            </div>
            </div>
            </div>
            </div>
            `;



            element.innerHTML += html;
        }

    }catch (error) {
        console.log("-----error-----:", error.message);

    }
}