import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth.component/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() recipesActiveEvent = new EventEmitter<boolean>();
  isAuthenticated = false;
  private userSubscription: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
    this.userSubscription = this.authService.userSubject.subscribe(
      user => {
        this.isAuthenticated = !!user;
      });
  }

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
    this.dataStorageService.retrieveRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
