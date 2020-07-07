import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipesActiveEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  setRecipesActive(): void {
    this.recipesActiveEvent.emit(true);
  }

  setShoppingListActive(): void {
    this.recipesActiveEvent.emit(false);
  }

}
