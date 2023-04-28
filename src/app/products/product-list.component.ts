import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
selector: 'pm-products',
templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit
{
    pageTitle : string = 'Welcome Phil Chen Angular'; 
    pageSubTitle: string = 'Product List by Interpolation';
    imageWidth = 50;
    imageMargin = 3;
    showImage: boolean = false;
    //listFilter: string = 'cart';

    private _listFilter = '';

    get listFilter () :string
    {return this._listFilter;}
        
    set listFilter (value: string)
    {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }    
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [
        // { productId: 123,
        //     productName: 'A for Apple',
        //     productCode: 'ABC-111',
        //     description: 'Desc Apple',
        //     releaseDate: '17/04/2023',
        //     price: 34.88,
        //     starRating: 3.5,
        //     imageUrl: 'assets/images/garden_cart.png'
        // },
        // { productId: 456,
        //     productName: 'Left Rack',
        //     productCode: 'RGP-345',
        //     description: 'Desc Rack',
        //     releaseDate: '18/04/2023',
        //     price: 88.88,
        //     starRating: 4.5,
        //     imageUrl: 'assets/images/leaf_rake.png'
        // },
    ]


    /*
 products: any[] = [
    {
        
        productId: 123,
        productName: 'A for Apple',
        productCode: 'ABC-111',
        description: 'Desc Apple',
        releaseDate: '17/04/2023',
        price: 34.88,
        starRating: 3.5,
        imageURL: 'assets/images/garden_cart.png'
    },
    {productID: 456,
    productName: 'R for Rack',
    productCode: 'ABC-456',
    description: 'Rack XXX',
    releaseDate: '17/04/2023',
    price: 34.88,
    starRating: 3.5,
    imageURL: 'assets/images/leaf_rake.png'
    }
    ];
*/
    //I am still inside the export class{}
    constructor(private productservice : ProductService)
    {}

    //get IProduct to get all of the products everytime. 
    performFilter(filterBy : string) : IProduct[]
    {
        filterBy = filterBy.toLocaleLowerCase();
        //filter() inside ( ) is a function. 
        return this.products.filter((product:IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    
    //for onInit event. 跟PB之Open Event差不多。
    ngOnInit(): void {
        this.products = this.productservice.getProduct();
        this.filteredProducts = this.products;
        console.log('Temp for Oninit for now.')
    }
}  