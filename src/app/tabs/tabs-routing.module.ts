import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "categorie",
        loadChildren: () =>
          import("../categorie/categorie.module").then(
            (m) => m.CategoriePageModule
          ),
      },

      {
        path: "favoris",
        loadChildren: () =>
          import("../favoris/favoris.module").then((m) => m.FavorisPageModule),
      },

      {
        path: "plus",
        loadChildren: () =>
          import("../plus/plus.module").then((m) => m.PlusPageModule),
      },

      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

