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
  }

  // Type Writer Library Implementation
    // TypeWriter: https://github.com/ChrisCavs/t-writer.js#changecursorcolor-color
    // https://chriscavs.github.io/t-writer-demo/

  typeAnimation() {
    const target1 = document.querySelector('.tw1')
    const target2 = document.querySelector('.tw2')


    const writer = new Typewriter(target1, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white',
      cursorColor: 'white'
    })
    
    writer
      .changeTypeColor('white')
      .type('My name is Abieshek Subramaniam.')
      .rest(2000)
      .changeOps({ deleteSpeed: 20 })
      .remove(43)
      .changeTypeColor('yellow')
      .type('I am a Software Developer.')
      .rest(1000)
      .changeOps({ deleteSpeed: 60 })
      .remove(24)
      .changeTypeColor('orange')
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
      .changeTypeColor('blue')
      .type('Thanks for visitng my site!')
      .rest(2000)
      .changeOps({ deleteSpeed: 40 })
      .clear()
      .start()


  }

}

