import { RouterModule, Routes } from '@angular/router';

import { ConstantsMessages } from "./constant-messages";

import { TestCompComponent } from './components/test-comp/test-comp.component';

import { RolePermisionsService } from './services/role-permisions.service';

export const route: Routes = [
    {
        path: ConstantsMessages.ROUTING_PAGE.INDEX_PAGE,
        component: TestCompComponent,
        canActivate : [RolePermisionsService]
    },
    // {
    //     path: ConstantsMessages.ROUTING_PAGE.LOGGEDIN_USER,
    //     children: [
    //         {
    //             path: ConstantsMessages.ROUTING_PAGE.DASHBOARD,
    //             component: AdminDashboardComponent
    //         },
    //         {
    //             path: ConstantsMessages.ROUTING_PAGE.VENDOR_LIST,
    //             children: [
    //                 {
    //                     path: '',
    //                     component: VendorsListComponent
    //                 }
    //             ]
    //         }
    //     ],
    //     component: TemplateComponent,
    //     canActivate : [RolePermisionsService]
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ConstantsMessages.ROUTING_PAGE.INDEX_PAGE
    }
]