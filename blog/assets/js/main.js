$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
    const blogs = document.querySelectorAll('#blog');
    const button = document.querySelector('.load-more');
    const buttonLess = document.querySelector('.load-less')
   
    for (let n = 0; n < blogs.length; n++) {
        var visual = 6;
      
        if (n % 2 ==! 0) {
            blogs[n].firstElementChild.style.flexDirection = "row-reverse";
            blogs[n].firstElementChild.firstElementChild.style.paddingLeft = '40px'
        }
        if(n>=visual){
            blogs[n].style.display = 'none';
            buttonLess.style.display = 'none';
        }
     
        // else if(n<visual){
        //     blogs[n].style.display = 'block'

        // }
       
       
    }
    button.addEventListener('click',()=>{
        visual = visual +3;
        for (let n = 0; n < blogs.length; n++) {
        if(n<visual){
            blogs[n].style.display = 'block'
            
        }
        if(visual == blogs.length){
            button.style.display = 'none';
            buttonLess.style.display = 'block';
            
        }
    }
    })
    buttonLess.addEventListener('click',()=>{
        visual = 6;
        for (let n = 0; n < blogs.length; n++) {
        if(n>=visual){
            blogs[n].style.display = 'none';
            buttonLess.style.display = 'none';
            button.style.display = 'block';
        }
    }
    })

  
  let arr = [12,123,34,45,1,2,355,4,];
  let max  = arr[0];
  for(let i = 1; i< arr.length; i++){
      if(arr[i]>max){
          max = arr[i];
      }
  }
  console.log(max);

    
    

});
