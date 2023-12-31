import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ConversionPipe } from './pipes/conversion.pipe';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import {
  errorTailorImports,
  provideErrorTailorConfig,
} from '@ngneat/error-tailor';
import { CurrencyComponent } from './components/currency/currency.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GithubSearchComponent } from './containers/github-search/github-search.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './containers/home/home.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { UiModule } from './ui/ui.module';
import { LoginButtonsComponent } from './components/login-buttons/login-buttons.component';
import { HttpLoaderInterceptor } from './services/http-loader.interceptor';
import { LoaderModule } from './loader/loader.module';
import { FilterByPipe } from './pipes/filter-by.pipe';
// @Decorator() : to define the behavior of a class
@NgModule({
  declarations: [
    // components, directives, pipes
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    DiscountPipe,
    ConversionPipe,
    ProductPriceComponent,
    CheckoutComponent,
    CurrencyComponent,
    NumbersOnlyDirective,
    ImgFallbackDirective,
    GithubSearchComponent,
    ErrorPageComponent,
    MenuComponent,
    HomeComponent,
    ProductDetailComponent,
    LoginButtonsComponent,
    FilterByPipe,
  ],
  imports: [
    //eagerly loaded modules
    BrowserModule,
    ReactiveFormsModule,
    errorTailorImports,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    LoaderModule,
  ],
  providers: [
    // services
    // singleton service : only one single object of this service will be created & will be available across the application
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoaderInterceptor,
      multi: true,
    },
    provideErrorTailorConfig({
      errors: {
        useValue: {
          required: 'This field is required',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect ${requiredLength} but got ${actualLength}`,
          zipcode: ({ enteredCode, validCode }) =>
            `Valid pincode is ${validCode}`,
        },
      },
    }),
  ],
  bootstrap: [
    // startup component
    AppComponent,
  ],
})
export class AppModule {}
