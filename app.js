let dataListe;
chargerDemandes()
function chargerDemandes() {
  fetch("http://127.0.0.1:8000/api/v1/exchange-requests?status=open")
  .then((reponse)=>{
    if (!reponse.ok) reject(new Error(`Erreur HTTP ${reponse.status}`))
      return reponse.json();
    
  })
  .then((data)=>{
    return (dataListe=[...data.data]);
  }).then(data => {
    affichage(data)
  })

  
}


chargerDemandes();

let cards = document.getElementById("cartdLivre")
function affichage(data) {
console.log(data)
  data.forEach( cart => {
  let livre= `
          
            </div>
                        <div class="flex  bg-white p-6 rounded-lg border-2">
                <div  >
                    <div class="flex  space-x-60 items-center">
                         <p class="text-lg font-bold">${cart.owner.name}</p>
                         <a href="#" class="border-2 rounded-lg  text-lg text-white bg-[#007339] w-[120px] h-[40px] flex items-center justify-center">definitif</a>
                    </div>

                    <div class="flex flex justify-evenly items-center h-[200px] border-t-2 border-slate-250  ">
                         <img src=http://127.0.0.1:8000${cart.book.image_url} alt="" class="w-[100px] h-[150px] rounded-lg">
                       <div class="text-lg font-bold flex-col items-center"> 
                            <p>${cart.book.title}</p>
                            <p>${cart.book.author}</p>
                         <p>Bon état</p>
                        </div>
                     </div>

                    <div class="border-t-2 border-slate-250 flex justify-between items-center " >
                        <p>${cart.end_date}</p>
                        <a href="#" class="font-bold"> > Details</a>
                        
                    </div>
                </div> 

                
             </div> 
  
  `
    cards.innerHTML += livre

  
});
}



