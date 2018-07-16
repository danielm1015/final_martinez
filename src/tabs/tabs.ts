import { Component } from "@angular/core";
import { HomePage } from "../pages/home/home";
import { ShoppingCartPage } from "../pages/shopping-cart/shopping-cart";

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
        <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>
        <ion-tab [root]="shoppingCartPage" tabTitle="Cart" tabIcon="cart"></ion-tab>
        </ion-tabs>
    `
})

export class TabsPage {
    homePage = HomePage;
    shoppingCartPage = ShoppingCartPage;
}