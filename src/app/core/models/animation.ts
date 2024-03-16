import { animate, style, transition, trigger } from "@angular/animations";

export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
  ])
]);

export const slideDownAnimation = trigger('slideDown', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }), // Element starts 100% off-screen above
      animate('0.5s ease-out', style({ transform: 'translateY(0%)' })) // Animates down to its intended position
    ])
  ]);

  export const slideFromTop = trigger('slideFromTop', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),
      animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('500ms ease-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
    ])
  ]);