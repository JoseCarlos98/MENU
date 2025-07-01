import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Module {
  id: string;
  name: string;
  icon: string;
  route: string;
  description?: string;
  submodules?: Submodule[];
}

export interface Submodule {
  id: string;
  name: string;
  icon: string;
  route: string;
}

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private activeModuleSubject = new BehaviorSubject<Module | null>(null);
  activeModule$ = this.activeModuleSubject.asObservable();

  private modules: Module[] = [
 
    {
      id: 'contabilidad',
      name: 'Contabilidad',
      icon: 'receipt_long',
      route: '/contabilidad',
      description: 'Control financiero y registro de operaciones contables',

      submodules: [
        { id: 'products', name: 'Productos', icon: 'shopping_bag', route: '/contabilidad/products' },
      ]
    },
  ];

  getModules(): Module[] {
    return this.modules;
  }

  setActiveModule(moduleId: string | null): void {
    const module = moduleId ? this.modules.find(m => m.id === moduleId) : null;
    this.activeModuleSubject.next(module || null);
  }

  getModuleById(moduleId: string): Module | undefined {
    return this.modules.find(m => m.id === moduleId);
  }
}