import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit{
  @Input() projectData: any;
ngOnInit(): void {
  setTimeout(() => {
    this.projectData.count++;
  }, 1000); 
}
}
