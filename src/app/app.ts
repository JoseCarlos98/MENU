import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationService, Module, Section, SubModule } from './service/navigation.service';
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
  activeSubModule: SubModule  | null = null;

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

  selectModule(module: Module): void {
    this.activeModule = module;
    this.activeSubModule = null;
  }

  selectSubModule(subModule: SubModule): void {
    this.activeSubModule = subModule;
  }

  returnToMainMenu(): void {
    this.activeModule = null;
    this.activeSubModule = null;
  }

  returnToSubModules(): void {
    this.activeSubModule = null;
  }

}