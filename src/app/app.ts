import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Module, NavigationService } from './service/navigation.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterOutlet
  ],
})
export class App implements OnInit {
  protected title = 'menu';
  modules: Module[] = [];
  activeModule: Module | null = null;
  isSidebarOpen = true;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.modules = this.navigationService.getModules();
    this.navigationService.activeModule$.subscribe(module => {
      this.activeModule = module;
    });
  }

  selectModule(moduleId: string) {
    this.navigationService.setActiveModule(moduleId);
  }

  returnToMainMenu() {
    this.navigationService.setActiveModule(null);
  }
}
