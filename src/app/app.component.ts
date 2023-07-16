import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as Parallax from 'parallax-js';
// @ts-ignore
import Typewriter from 't-writer.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ngOnInit() {
    this.typeAnimation();
    this.parallaxAnimation1();
    this.parallaxAnimation2();
    this.mouseScroll();
  }

  // Mouse Scroll Animation
  mouseScroll() {
    let mouse:any = document.getElementById("mouse");
    mouse.addClass("visible");
  }
  

  // Parallax Animation for the City
  parallaxAnimation1() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let layer1: any = document.getElementById("layer1");
    let layer2: any = document.getElementById("layer2");
    let layer3: any = document.getElementById("layer3");
    let layer4: any = document.getElementById("layer4");

    let text: any = document.getElementById("tw1");

  
    window.addEventListener('scroll', function() {
        var value = window.scrollY;
        layer1.style.top = value * 0.9 + 'px';

        layer2.style.top = value * 0.5 + 'px';
        layer2.style.left = value * 0.7 + 'px';

        layer3.style.top = value * 0.6 + 'px';
   
        layer4.style.top = value * 0.5 + 'px';
        
        text.style.top = value * .9 + 'px';
    })
  }


  // Parallax Animation for the Timeline Section
  parallaxAnimation2() {
    window.addEventListener('scroll', function() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (window.scrollY >= .8*height) {
        let layer1: any = document.getElementById("image2-layer1");
        let layer2: any = document.getElementById("image2-layer2");
        let layer3: any = document.getElementById("image2-layer3");
        let layer4: any = document.getElementById("image2-layer4");
        let layer5: any = document.getElementById("image2-layer5");
          // let bird: any = document.getElementById("bird");

          var value = window.scrollY;
          layer1.style.top = (value-.8*height) * 0.1 + 'px' ;


          layer2.style.top = (value-.8*height) * 0.6 + 'px' ;
          layer2.style.left = (value-.8*height) * 0.03 + 'px';
    
          layer3.style.top = (value-.8*height) * 0.5 + 'px';
          layer3.style.left = -(value-.8*height) * 0.03 + 'px';
    
          layer4.style.top = (value-.8*height) * 0.4 + 'px';
          layer4.style.left = (value-.8*height) * 0.03 + 'px';
    
          layer5.style.top = (value-.8*height) * 0.3 + 'px';
          layer5.style.left = -(value-.8*height) * 0.03 + 'px';

          
      }

    })
  }

  // Type Writer Library Implementation
    // TypeWriter: https://github.com/ChrisCavs/t-writer.js#changecursorcolor-color
    // https://chriscavs.github.io/t-writer-demo/
  typeAnimation() {
    const target1 = document.querySelector('#tw1')

    const writer = new Typewriter(target1, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white',
      cursorColor: 'white'
    })
    
    writer
      .changeTypeColor('white')
      .type('My name is Abieshek.')
      .rest(2000)
      .changeOps({ deleteSpeed: 20 })
      .remove(43)
      .type('I am a Software Developer.')
      .rest(1000)
      .changeOps({ deleteSpeed: 60 })
      .remove(24)
      .type('have experience with Java')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(1)
      .type('aScript')
      .rest(500)
      .remove(10)
      .type('HTML')
      .rest(500)
      .remove(4)
      .type('CSS')
      .rest(500)
      .remove(3)
      .type('SQL')
      .rest(500)
      .remove(3)
      .type('REST APIs')
      .rest(500)
      .remove(9)
      .type('AWS')
      .rest(500)
      .remove(8)
      .type('in Angular')
      .rest(500)
      .remove(7)
      .type('Spring')
      .rest(500)
      .remove(27)
      .type('Thanks for visiting my site!')
      .rest(2000)
      .changeOps({ deleteSpeed: 40 })
      .clear()
      .start()
  }

}

