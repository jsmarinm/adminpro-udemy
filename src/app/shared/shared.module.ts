import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    declarations: [
        
        HeaderComponent,
        SiderbarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports: [
        HeaderComponent,
        SiderbarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ]
})
export class SharedModule {
    
}