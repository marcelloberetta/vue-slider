
const main = new Vue({

  el:'#main',
  

  data:{

    counterSlide:0,
    slider:[
      'assets/img/gatto.jpg', 
       'assets/img/cane.jpg', 
       'assets/img/criceto.jpg', 
       'assets/img/scimmia.jpg',  
       'assets/img/serpente.jpg'  ,
       'assets/img/uccello.jpg',  
    ]
    
  },
  methods:{
    nextSlide(){
      this.counterSlide++;
      if(this.counterSlide === this.slider.length) this.counterSlide = 0;
      console.log(this.slider.length);
    },
    prevSlide(){
      this.counterSlide--;
     
      if(this.counterSlide < 0) this.counterSlide = this.slider.length -1;
      console.log(this.slider.length)
    }
  }

});


