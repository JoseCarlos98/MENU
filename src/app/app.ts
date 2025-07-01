import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationService, Module, Section } from './service/navigation.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  modules: Module[] = [];
  activeModule: Module | null = null;
  isSidebarOpen = true;
  expandedSections: { [key: string]: boolean } = {};

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.modules = this.navigationService.getModules();
    this.navigationService.activeModule$.subscribe(module => {
      this.activeModule = module;
      // Inicializar todos los sections como expandidos
      // if (module) {
      //   module.sections?.forEach(section => {
      //     this.expandedSections[section.id] = true;
      //   });
      // }
    });
  }

  selectModule(moduleId: string) {
    this.navigationService.setActiveModule(moduleId);
  }

  returnToMainMenu() {
    this.navigationService.setActiveModule(null);
  }

  toggleSection(sectionId: string, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.expandedSections[sectionId] = !this.expandedSections[sectionId];
  }

}