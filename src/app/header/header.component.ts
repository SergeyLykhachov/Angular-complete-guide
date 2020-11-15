import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipesActiveEvent = new EventEmitter<boolean>();


  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
  }

  setRecipesActive(): void {
    this.recipesActiveEvent.emit(true);
  }

  setShoppingListActive(): void {
    this.recipesActiveEvent.emit(false);
  }

  saveData() {
    this.dataStorageService.storeRecipes();
  }

  fetchData() {
    this.dataStorageService.retrieveRecipes();
  }

}