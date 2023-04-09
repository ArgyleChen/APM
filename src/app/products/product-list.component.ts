import { Component } from "@angular/core";

@Component({
selector: 'pm-products',
templateUrl: './product-list.component.html'
})

export class ProductListComponent
{
    pageTitle : string = 'Welcome Phil Chen Angular'; 
    pageSubTitle: string = 'Product List by Interpolation';
    imageWidth = 50;
    imageMargin = 3;
    showImage: boolean = false;
    listFilter: string = 'cart';

    products: any[] = [
    {
        productID: 123,
        productName: 'A for Apple',
        productCode: 'ABC',
        description: 'Desc Apple',
        releaseDate: '17/04/2023',
        price: 34.88,
        starRating: 3.5,
        imageURL: 'assets/images/garden_cart.png'
    },
    {productID: 456,
    productName: 'R for Rack',
    productCode: 'ABC',
    description: 'Rack XXX',
    releaseDate: '17/04/2023',
    price: 34.88,
    starRating: 3.5,
    imageURL: 'assets/images/leaf_rake.png'
    }
    ];

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    
}  