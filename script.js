document.querySelector("#search").addEventListener("click",function(){
   let searchedInfo= document.querySelector(".search-box").value

    fetch(`https://api.tvmaze.com/search/shows?q=${searchedInfo}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        for(let i=0; i<data.length;i++){
            document.querySelector(".img").src=data[i].show.image.original
            document.querySelector(".movie-heading").innerText=data[i].show.name
            
            
            if(data[i].show.rating.average == null){
                document.querySelector(".rateNo").innerText=0
            }else{
                document.querySelector(".rateNo").innerText=data[i].show.rating.average
            }
            // if(data[i].show.rating.)
            document.querySelector(".genres").innerText=`${data[i].show.genres}`

            document.querySelector(".button").addEventListener("click",function(){
                 data[i].show.officialSite
            })
            
            console.log(data[i].show)
        }
        
    })
})