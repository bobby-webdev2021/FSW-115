// Ygo Control
if (document.body.id == "digPage"){
    document.querySelector("#digSubmit").addEventListener("click", () => {
            if(document.querySelector("#digMain").childElementCount == 0){
                let loading = true;
                if(loading == true){
                    document.querySelector("#digSubmit").innerHTML = "Loading...Please wait";
                }
            axios.get("https://digimoncard.io/api-public/search.php?n=Agumon")
                .then(result =>{
                    result.data.forEach(function(element, index){

                        var entryDiv = document.createElement("div")
                        var digName = document.createElement("h1")
                        var digData = document.createElement("img")

                        digName.textContent = result.data[index].name
                        digData.setAttribute("src", result.data[index].image_url)
                        document.querySelector("#digMain").appendChild(entryDiv)
                        entryDiv.appendChild(digName)
                        entryDiv.appendChild(digData)   
                    })
                    if (result.data[i].isComplete == true)
            {
                digName.setAttribute("style", "text-decoration: line-through");
                digData.setAttribute("style", "text-decoration: line-through");
            }
                loading = false;
                if(loading == false){
                    document.querySelector("#digSubmit").innerHTML = "Get All!";
                }
                })
                .catch(err => console.log(err))
        }
    })
}

 // monster Control
if (document.body.id == "monsterPage"){
    document.querySelector("#monsterSubmit").addEventListener("click", () => {
            if(document.querySelector("#monsterMain").childElementCount == 0){
                let loading = true;
                if(loading == true){
                    document.querySelector("#monsterSubmit").innerHTML = "Loading...Please wait";
                }
            axios.get("https://mhw-db.com/ailments")
                .then(result =>{
                    result.data.forEach(function(element, index){

                        var entryDiv = document.createElement("div")
                        var monsterName = document.createElement("h1")
                        var monsterData = document.createElement("h3")

                        monsterName.textContent = result.data[index].name
                        monsterData.textContent = result.data[index].description
                        document.querySelector("#monsterMain").appendChild(entryDiv)
                        entryDiv.appendChild(monsterName)
                        entryDiv.appendChild(monsterData)   
                    })
                    
                if (result.data[i].isComplete == true)
            {
                monsterName.setAttribute("style", "text-decoration: line-through");
                monsterData.setAttribute("style", "text-decoration: line-through");
            }
            
                        loading = false;
                if(loading == false){
                        document.querySelector("#monsterSubmit").innerHTML = "Get All!";
                }
                })
                .catch(err => console.log(err))
        }
    })
}
