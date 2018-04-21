import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate , keyframes, group } from '@angular/animations';

@Component({
  selector: 'animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    // One animation for a DIV
    trigger('divState', [
      state('normal', style({
        'background-color': '#ff5252',
        transform: 'translateX(0%)',
      })),
      state('highlighted', style({
        'background-color': '#6bb7f4',
        transform: 'translateX(400px)',
      })),
      transition('normal <=> highlighted', animate(300)),
    ]),
    // Other animation for a DIV
    // * state for whatever state
    // Array of steps in transitions
    trigger('wildState', [
      state('normal', style({
        'background-color': '#ff5252',
        transform: 'translateX(0%) scale(1)',
      })),
      state('highlighted', style({
        'background-color': '#6bb7f4',
        transform: 'translateX(200px) scale(1)',
      })),
      state('shrunken', style({
        'background-color': '#3ea8a8',
        'border-radius': '50%',
        transform: 'translateX(400px) scale(0.5)',
      })),
          // Transitions
      transition('normal <=> highlighted', animate(300)),
          // * is used to indicated that the transitions can come from any state
      transition('shrunken <=> *', [
              // Here we can define as many phases for our transition as we want
        style({
          'background-color': 'orange',
        }),
        animate(300, style({
          'border-radius': '10%'
        })),
        animate(600, style({
          'border-radius': '30%'
        })),
        animate(300)
      ]),
    ]),
    // One animation for add or remove elements in the first list
    // VOID state
    trigger('listOne', [
      state('in', style({
        'opacity': '1',
        'transform': 'translateX(0)',
      })),
      transition('void => *', [
        // We need to add this first style that Angular will takes at the moment the element is rendered
        // After this we will make the animation to the style we have declare at the start of the trigger
        style({
          'opacity': '0',
          transform: 'translateX(100px)',
        }),
        animate(400)
      ]),
      transition('* => void', [
        // We need to add this first style that Angular will takes at the moment the element is rendered
        // After this we will make the animation to the style we have declare at the start of the trigger
        group([
          animate(400,
            style({
              'opacity': '0',
              transform: 'translateX(-100px)',
            })
          ),
          animate(100,
            style({
              'color': 'red',
            })
          )
        ])
      ]),
    ]),
    // One animation for add or remove elements in the first list
    // KEYFRAMES for assing importantce in steps of transition
    trigger('listTwo', [
      state('in', style({
        'opacity': '1',
        'transform': 'translateX(0)',
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            'opacity': '0',
            color: 'green',
            borderColor: 'green',
            transform: 'translateX(100px)',
            offset: 0
          }),
          style({
            'opacity': '0.5',
            transform: 'translateX(50px)',
            offset: 0.3
          }),
          style({
            'opacity': '1',
            transform: 'translateX(20px)',
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            offset: 1,
            color: '#f1f1f1',
            borderColor: '#f1f1f1',
          }),
        ])),
      ]),
      transition('* => void', [
        animate(1000, keyframes([
          style({
            color: 'red',
            borderColor: 'red',
            offset: 0,
          }),
          style({
            opacity: 0.3,
            offset: 0.3,
          }),
          style({
            opacity: 0,
            transform: 'translateX(-100px)',
            offset: 1,
          })
        ]))
      ]),
    ]),
  ]
})
export class AnimationsComponent implements OnInit {

  wildState = 'normal';

  state = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

  constructor() { }

  ngOnInit() {
  }

  onAdd(item) {
    this.list.push(item);
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal';
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }


  // Next two functions are used as a callback after the animation has started or finished.
  animationStarted(event: Event) {
    console.log(event);
  }

  animationEnded(event: Event) {
    console.log(event);
  }
}
