import { Routes } from '@angular/router';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { InventoryComponent } from './components/modules/inventory/inventory.component';
// import { ProductsComponent } from './components/modules/inventory/products/products.component';
// import { StockComponent } from './components/modules/inventory/stock/stock.component';
// import { SalesComponent } from './components/modules/sales/sales.component';
// import { OrdersComponent } from './components/modules/sales/orders/orders.component';
// import { InvoicesComponent } from './components/modules/sales/invoices/invoices.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
  // Dashboard
  // { path: 'dashboard', component: Dashboard },
  
  // Inventario
//   { 
//     path: 'inventory', 
//     component: InventoryComponent,
//     children: [
//       { path: 'products', component: ProductsComponent },
//       { path: 'stock', component: StockComponent },
//       { path: '', redirectTo: 'products', pathMatch: 'full' }
//     ]
//   },
  
//   // Ventas
//   { 
//     path: 'sales', 
//     component: SalesComponent,
//     children: [
//       { path: 'orders', component: OrdersComponent },
//       { path: 'invoices', component: InvoicesComponent },
//       { path: '', redirectTo: 'orders', pathMatch: 'full' }
//     ]
//   },
  
//   // Finanzas (ruta básica sin hijos por ahora)
//   { path: 'finances', component: DashboardComponent },
  
//   // RRHH (ruta básica sin hijos por ahora)
//   { path: 'hr', component: DashboardComponent },
  
//   // Reportes (ruta básica sin hijos por ahora)
//   { path: 'reports', component: DashboardComponent },
  
//   // Configuración (ruta básica sin hijos por ahora)
//   { path: 'config', component: DashboardComponent }
];