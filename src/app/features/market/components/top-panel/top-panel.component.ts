import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-panel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-panel.component.html',
  styleUrl: './top-panel.component.css'
})
export class TopPanelComponent implements AfterViewInit {

  savedRetailers: Array<any> = [
    {
      name: "AMSA",
      owner: "Someone",
      image: "https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060"
    },
    {
      name: "AMSA",
      owner: "Someone",
      image: "https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060"
    },
    {
      name: "AMSA",
      owner: "Someone",
      image: "https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060"
    },
    {
      name: "AMSA",
      owner: "Someone",
      image: "https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060"
    },
    {
      name: "AMSA",
      owner: "Someone",
      image: "https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060"
    },
    {
      name: "AMSA",
      owner: "Someone",
      image: "https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060"
    },
    {
      name: "AMSA",
      owner: "Someone",
      image: "https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060"
    },
    {
      name: "AMSA",
      owner: "Someone",
      image: "https://img.freepik.com/premium-photo/sawdust_15578-97.jpg?w=1060"
    },
  ]

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  ngOnInit(): void {}

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
