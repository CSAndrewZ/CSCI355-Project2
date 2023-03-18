const counters = document.querySelectorAll('.counter');

counters.forEach( counter => {
     
  counter.innerText = '0';
     
     const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        

        const increment = target / 200;
     
        if( c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 30);
        }
        else{
          counter.innerText = target;
        }
      
      
     }

     updateCounter();


})

/* Udemy Idea #2 */

var indexValue = 1;

showImg(indexValue);

function btm_slide(e){
    showImg(indexValue = e);
}

function side_slide(e){
  showImg(indexValue += e);
}

function showImg(e){
  var i;
  const img = document.querySelectorAll('.legend-photos img');
  const sliders = document.querySelectorAll('.btm-sliders span');
  if( e > img.length ){ indexValue =1; }
  if( e < 1 ){ indexValue = img.length}
  for( let i = 0; i < img.length; i++ ){
    img[i].style.display = "none";
  }

  img[indexValue-1].style.display = "block";

}