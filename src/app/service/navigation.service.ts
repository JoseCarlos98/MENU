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
      id: 'dashboard',
      name: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
      description : 'Vista general del sistema'
    },
    {
      id: 'inventory',
      name: 'Inventario',
      icon: 'inventory',
      route: '/inventory',
      description : 'Gestión de productos y almacén',
      submodules: [
        { id: 'products', name: 'Productos', icon: 'shopping_bag', route: '/inventory/products' },
        { id: 'stock', name: 'Stock', icon: 'warehouse', route: '/inventory/stock' },
        { id: 'warehouses', name: 'Almacenes', icon: 'store', route: '/inventory/warehouses' },
        { id: 'movements', name: 'Movimientos', icon: 'compare_arrows', route: '/inventory/movements' },
        { id: 'suppliers', name: 'Proveedores', icon: 'local_shipping', route: '/inventory/suppliers' }
      ]
    },
    // ... otros módulos con sus submodules
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