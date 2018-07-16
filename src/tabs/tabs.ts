import { Component } from "@angular/core";
import { ShoppingCartPage } from "../pages/shopping-cart/shopping-cart";
import { BargainFeedPage } from "../pages/bargain-feed/bargain-feed";

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
        <ion-tab [root]="bargainFeedPage" tabTitle="Home" tabsHideOnSubPages="false" tabIcon="home"></ion-tab>
        <ion-tab [root]="shoppingCartPage" tabsHideOnSubPages="false" tabTitle="Cart" tabIcon="cart"></ion-tab>
        </ion-tabs>
    `
})

export class TabsPage {
    bargainFeedPage = BargainFeedPage;
    shoppingCartPage = ShoppingCartPage;
}