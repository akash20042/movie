  let movies = [

{
  name : 'Avenger Endgame',
   poster : 'https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5157/875157-v' ,
    rating : 8.7 ,
    Actor: "dubi jr"
}  
,
{
  name: "Leo",
  poster: "https://filmfare.wwmindia.com/content/2023/sep/leovijay11695026272.jpg" ,
   rating :8.2  ,
   Actor:"Vijay Thalpathy"
}
,
{
  name: "pathan",
  poster: "https://bollywoodmovieposters.com/wp-content/uploads/2023/01/pathan-poster-shahrukh-khan-movie-srk.jpg",
   rating : 8.1 ,
    Actor:"shahrukh Khan"
}
,
{
  name: "RRR",
  poster: "https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
   rating : 8.8 ,
   Actor: "Ram charan Jr. NTR"
}
, 
{
   name : 'KGF',
   poster : "https://content.tupaki.com/twdata/2022/0122/news/Birthday-Poster---KGF-2--To-Conquer-The-World-In-April--1641619946-1136.jpg"   ,
    rating :  7.8 ,
    Actor:"Yash"
}
, 
{
   name : 'rustom',
   poster : "https://static-koimoi.akamaized.net/wp-content/new-galleries/2016/03/rustom-movie-posters.jpg"   ,
    rating : 8.5 ,
     Actor:"Akshay kumar  d suja "
}
, 
{
   name : 'Ek tha Tiger',
   poster : "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2011/08/26/Incoming/Pictures/738227_Wallpaper2.jpg"   ,
    rating :  8.6 ,
     Actor:"Salman khan Kaitrina kaif"
}
, 
{
   name : 'DHoom 3',
   poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARsRgfymrPIkd1oyWgYmYJH7erzvrOsZfqQ&usqp=CAU"   ,
    rating :  8.9  ,
     Actor:" Amir khan kaitrina Kaif"
}
,
{
   name : 'Animal',
    poster : 'https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg' , 
     rating : 7.4 ,
      Actor:"Ranver Kapoor" 
},

{
   name : 'Devara',
    poster :"https://c.ndtvimg.com/2024-01/nnv2bif_alia-_625x300_01_January_24.jpg" ,
    rating : 9.1 ,
    Actor:"Jr. NTR"
} , 


{
    name: "pushpa" ,
    poster: "https://cdn.gulte.com/wp-content/uploads/2021/12/Review1.jpg",
     rating : "8.9",
     Actor : "Allu Arjun" ,
} ,

{
    name: "Salar",
     poster:"https://m.media-amazon.com/images/M/MV5BNWNjMWQ0MDQtMGFmNC00NTQ0LTkwYWItNDcxOTY0MTQyNzU5XkEyXkFqcGdeQXVyMTcxODI1Mzc1._V1_.jpg",
      rating : 8.8 ,
       Actor:" Prabhas"
},
{
    name: "Alavaikunthpuram",
     poster:"https://m.media-amazon.com/images/M/MV5BZmE3Zjc5MDctZWU2OS00MmI0LWI3YmItZDgwZGQ4NGFjNTNmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      rating : 8.8,
      Actor : "Allu Arjun" ,


},

{
    name: "Jawan",
     poster:"https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg",
      rating : 8.8 ,
       Actor:"Shahrukh khan"
}

  ]
 
 
 function searchMovie(){

  let movieName = document.getElementById('search').value
  //  console.log(movieName);

  if( movieName!==""){


    let result =   movies.filter( function( movie){

       return movie.name.toUpperCase() === movieName.toUpperCase()

        
     })
 displaymovie(result)
    
  }
   else {
       displaymovie(movies) ;
   }

 }


   function displaymovie (data){

document.getElementById('movies').innerHTML = ""


 let htmlString = ` ` ;  


 for (let i = 0; i < data.length; i++) {
  

   htmlString = htmlString + `
   
<div class="movie">
<div class="overlay"> 

        <div class="video">

          </div>
            <div class="details">
                <h1>${data[i].name} </h1> 
                 <h2> ${data[i].rating} </h2>
                  <p> ${data[i].Actor} </p>
               
            </div>

</div>
<img  class="poster" src="${data[i].poster}" alt="">

</div> 
   
   `
 }  

        document.getElementById('movies').innerHTML = htmlString

   }

    displaymovie(movies)