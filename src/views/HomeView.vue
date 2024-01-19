<script setup>
</script>

<template >
  <main >
    
    <div class="container2">
      <h2 class="title">
        <span class="title-word title-word-1">Welcome</span> &nbsp;
        <span class="title-word title-word-2">To</span>&nbsp;
        <span class="title-word title-word-3">Trip</span>&nbsp;
        <span class="title-word title-word-4">Explorer</span>
      </h2>
    </div>
    
    <h4>Explore, Record, and Discover Your Journeys</h4>
    <h5>Embark on a seamless journey of exploration with TripExplorer, the perfect travel app designed to elevate your adventures. Whether you're a globetrotter, an occasional explorer, or a passionate traveler,
       TripExplorer is here to enhance every step of your journey.</h5>

    
    <div class="txt" id="txt">
        <b>S</b><b>I</b><b>G</b><b>N</b><b>&nbsp;</b><b>U</b><b>P</b>
    </div>


      
    

       


  </main>
</template>

<style>

#txt{
   display:flex;
   align-items:center;
   justify-content:center;
   flex:1;
   font-family:sans-serif;
   letter-spacing:3.5px;
   font-size:3.5rem;
   font-weight:700;
   position:relative;
   transform-style:preserve-3d;
   perspective:100px;
   -webkit-transform-style:preserve-3d;
   -webkit-perspective:100px;
}
#txt>b{
   height:3.5rem;
   box-shadow:0 .4rem .3rem -.3rem #aaa;
   color:#979c9f;
   background:linear-gradient(#aaf,#acf,#afc);
   background-clip:text;
   /* text-fill-color:transparent; */
   -webkit-background-clip:text;
   -webkit-text-fill-color:transparent;
   transform-origin:bottom;
   transform:rotateX(-85deg);
   -webkit-transform-origin:bottom;
   -webkit-transform:rotateX(-85deg);
   animation:getUp 7s infinite;
}
#txt>b:nth-child(2){
   animation-delay:.25s;
}
#txt>b:nth-child(3){
   animation-delay:.5s;
}
#txt>b:nth-child(4){
   animation-delay:.75s;
}
#txt>b:nth-child(5){
   animation-delay:1s;
}
#txt>b:nth-child(6){
   animation-delay:1.25s;
}
#txt>b:nth-child(7){
   animation-delay:1.5s;
}
#txt>b:nth-child(8){
   animation-delay:1.75s;
}

@keyframes getUp{
   10%,50%{
      transform:rotateX(0);
   }
   0%,60%,100%{
      transform:rotateX(-85deg);
   }
}

/* the new one from here */
.title-word1 {
  animation: color-animation 2s linear infinite;
}

.title-word-11 {
  --color-1: #eb590b00;
  --color-2: #200a9c00;
  --color-3: #e7eb0d;
}

.title-word-21 {
  --color-1: #dbad4a00;
  --color-2: #accfcb00;
  --color-3: #e7eb0d;
}

.title-word-31 {
  --color-1: #075f5500;
  --color-2: #e4a9a800;
  --color-3: #e7eb0d;
}



@keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
}

/* Here are just some visual styles. 🖌 */

.container1 {
  display: grid;
  margin-left: 20px;
 
  height: 10vh
 
}

.title1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 80;
  font-size: 1vw;
  text-transform: uppercase;
}

/* the new one here ends  */



.title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #eb590b;
  --color-2: #200a9c;
  --color-3: #E4A9A8;
}

.title-word-2 {
  --color-1: #DBAD4A;
  --color-2: #ACCFCB;
  --color-3: #17494D;
}

.title-word-3 {
  --color-1: #075f55;
  --color-2: #E4A9A8;
  --color-3: #ACCFCB;
}

.title-word-4 {
  --color-1: #1197d1;
  --color-2: #DF8453;
  --color-3: #b10705;
}

@keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
}

/* Here are just some visual styles. 🖌 */

.container2 {
  display: grid;
  place-items: center;  
  text-align: center;
  height: 10vh
 
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 80;
  font-size: 2.5vw;
  text-transform: uppercase;
}


h4 {
  margin-left: 120px;
  text-shadow: 0px 0px 5px rgb(245, 81, 4);
  margin-bottom: 20px;
  margin-top: 30px;
  margin-right: 40px;
  
}
 h5 {
  margin-left: 120px;
  text-shadow: 0px 0px 5px rgb(73, 1, 5);
  margin-bottom: 100px;
  margin-right: 40px;
  
}

h3 {
  
  margin-top: 100px;
  margin-bottom: 40px;
  text-shadow: 0px 0px 5px rgba(128, 0, 0, 1);
}

</style>

