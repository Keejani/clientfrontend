import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../../../core/components/navbar/navbar.component";
import { TopPanelComponent } from "../components/top-panel/top-panel.component";
import { ProductsFetchComponent } from "../products-fetch/products-fetch.component";
import { NgxGlideModule } from 'ngx-glide';
import { NgFor } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { FooterComponent } from "../../../core/components/footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { CartCrudService } from '../../../services/cart/cart-crud.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductCommentDialogComponent } from './dialog-component/comment.components';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../../../utils/cart.interface';
import { UserCrudService } from '../../../services/user/user-crud.service';
import { NumbersOnlyDirective } from '../../../utils/directives/numbers-only-directive';
import { CustomToasterService } from '../../../services/custom-toaster/custom-toaster.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavbarComponent, NumbersOnlyDirective, NgFor, QuillModule, FormsModule, GalleriaModule, NgFor, NgxGlideModule, TopPanelComponent, ProductsFetchComponent, FooterComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductPageComponent implements OnInit{

  glideOptions = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
  };

  loadingCart = false;

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ]
  };

  comment = "";

  isLoading = false;
  images = [];

  dialog = inject(MatDialog)

  responsiveOptions: any[] | undefined;

  route = inject(ActivatedRoute);
  toaster = inject(CustomToasterService);
  cartService = inject(CartCrudService);
  userService = inject(UserCrudService);

  ngOnInit(): void {
      this.responsiveOptions = [
          {
              breakpoint: '1024px',
              numVisible: 5
          },
          {
              breakpoint: '768px',
              numVisible: 3
          },
          {
              breakpoint: '560px',
              numVisible: 1
          }
      ];
  
      this.getParams()
  }

  listOfCards : Array<any> = [
    {
      img : "https://img.freepik.com/free-photo/dirty-dumped-objects-arrangement_23-2148996942.jpg?t=st=1723880726~exp=1723884326~hmac=3dda895000db0954e0e7f5b1b385d4c056b5bb4be59ccbf60f3da0a4f2702053&w=740"
    },
    {
      img : "https://img.freepik.com/premium-photo/closeup-metal-scraps-being-used-create-kinetic-sculpture-using-metal-scraps-create-kinetic-sculpture_538213-88146.jpg?w=996"
    },
    {
      img : "https://img.freepik.com/free-photo/dirty-dumped-objects-arrangement_23-2148996943.jpg?t=st=1723880686~exp=1723884286~hmac=add8e19fb3bf14739182e02464cbe8f2a59129ffcb388deec07d5f53bf379838&w=996"
    },

  ]

  rating = 4.5;
  totalReviews = 23;


  product : any;

  vendor = {
    name: 'Eco Plastics Ltd',
    image: 'https://img.freepik.com/free-photo/photo-automobile-production-line-welding-car-body-modern-car-assembly-plant-auto-industry-interior-hightech-factory-modern-production_645730-185.jpg?t=st=1723879011~exp=1723882611~hmac=b141bf4cd367918992bb8c3422606c968c596df02d44906c5142b10f2178184a&w=996'
  };

  placeBid() {
    // Implement bid logic
  }
  
  buy() {
    // Implement bid logic
  }

  saveForLater() {
    // Implement save for later logic
  }

  addReview(){
    const uid = sessionStorage.getItem("uid");
    if(uid != null)
    this.dialog.open(ProductCommentDialogComponent, {
      data: {
        productId : this.product.id,
        buyerId : uid
      }
    })
  }


  getParams(){
    this.isLoading = true;
    this.route.queryParams.subscribe({
      next: (n : any) => {
        this.isLoading = true;
        if(n != null)
          this.cartService.getProduct({Id : n.id}).subscribe({
        next: (n : any) =>{
            this.isLoading = false;
            this.product = n
          }
        })
      }
    })
  }

  increaseQuantity(item: number): void {
    item + 1;
  }

  quantity = 1;

  decreaseQuantity(item: number): void {
    if (item > 1) {
      item--;
    }
  }

  addToCart(itemId : string){
    this.loadingCart = true;
    const uid = sessionStorage.getItem("uid");
    if(uid != null)
      this.userService.getUser({Id: uid}).subscribe({
    next: (n : any) => {
      var payload :  CartItem = {
        itemId: itemId,
        cartId: n.cartId,
        quantity: this.quantity
      }
      
      this.cartService.addToCart(payload).subscribe({
        next: (n : any) => {
          this.loadingCart = false;
          this.toaster.show("success", "Added to cart successfully!")
        }, 
        error: (e)=> {
          this.loadingCart = false;
          this.toaster.show("error", e.message)
        }
       })
     }
  })
  }

}
