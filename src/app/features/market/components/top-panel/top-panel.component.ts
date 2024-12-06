import { AfterViewInit, Component, ElementRef, inject, Input, input, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartCrudService } from '../../../../services/cart/cart-crud.service';

@Component({
  selector: 'app-top-panel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-panel.component.html',
  styleUrl: './top-panel.component.css'
})
export class TopPanelComponent implements AfterViewInit , OnInit{

  @Input() bids! : number;

  cartService = inject(CartCrudService)

  getAllBids(){
    const userId = sessionStorage.getItem('uid');

    if(userId != null){
      this.cartService.getBids({Id: userId}).subscribe({
        next: (n : any) => {
          console.log(n);
          this.bids = n.length
        }
      })
    } else {
      return;
    }
  }

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  ngOnInit(): void {
    this.getAllBids()
  }

  ngAfterViewInit(): void {
    this.scrollContainer.nativeElement.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault();
    });

    this.scrollContainer.nativeElement.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDown = true;
      this.startX = e.pageX - this.scrollContainer.nativeElement.offsetLeft;
      this.scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
      this.scrollContainer.nativeElement.classList.add('active');
    });

    this.scrollContainer.nativeElement.addEventListener('mouseleave', () => {
      this.isDown = false;
      this.scrollContainer.nativeElement.classList.remove('active');
    });

    this.scrollContainer.nativeElement.addEventListener('mouseup', () => {
      this.isDown = false;
      this.scrollContainer.nativeElement.classList.remove('active');
    });

    this.scrollContainer.nativeElement.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.scrollContainer.nativeElement.offsetLeft;
      const walk = (x - this.startX) * 3; // Adjust the multiplier to speed up or slow down the scroll
      this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
    });
  }


}
