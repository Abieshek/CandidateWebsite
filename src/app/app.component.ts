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
    this.parallaxAnimation();
  }

  // Parallax Animation
  parallaxAnimation() {
    let layer1: any = document.getElementById("layer1");
    let layer2: any = document.getElementById("layer2");
    let layer3: any = document.getElementById("layer3");
    let layer4: any = document.getElementById("layer4");
    let layer5: any = document.getElementById("layer5");
    let text: any = document.getElementById("tw1");
    let arrow: any = document.getElementById("arrow");
  
    window.addEventListener('scroll', function() {
        var value = window.scrollY;
        layer1.style.top = value * 0.7 + 'px';

        layer2.style.top = value * 0.5 + 'px';
        layer2.style.left = value * 0.03 + 'px';

        layer3.style.top = value * 0.4 + 'px';
        layer3.style.left = -value * 0.03 + 'px';

        layer4.style.top = value * 0.3 + 'px';
        layer4.style.left = value * 0.03 + 'px';

        layer5.style.top = value * 0.2 + 'px';
        layer5.style.left = -value * 0.03 + 'px';

        text.style.top = value * 1 + 'px';
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
      .type('Thanks for visitng my site!')
      .rest(2000)
      .changeOps({ deleteSpeed: 40 })
      .clear()
      .start()


  }

}

