import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private r: Router) {}

  title = 'jobportal';

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  companies = [
    {
      name: 'MNCs',
      hiring: 2.1,
      images: [
        '../assets/mphasis.jpg',
        '../assets/capgemini.png',
        '../assets/tcs.png',
      ],
    },
    {
      name: 'Internet',
      hiring: 3.5,
      images: [
        '../assets/dell.png',
        '../assets/deloitte.png',
        '../assets/microsoft.png',
      ],
    },
    {
      name: 'Manufacturing',
      hiring: 1.8,
      images: [
        '../assets/ibm.png',
        '../assets/infosys.png',
        '../assets/tcs.png',
      ],
    },
    {
      name: 'Fortune 500',
      hiring: 5.0,
      images: [
        '../assets/hcl.png',
        '../assets/wipro.png',
        '../assets/facebook.png',
      ],
    },
    {
      name: 'Product',
      hiring: 3.2,
      images: [
        '../assets/samsung.png',
        '../assets/ibm.png',
        '../assets/infosys.png',
      ],
    },
    {
      name: 'Service',
      hiring: 4.7,
      images: [
        '../assets/deloitte.png',
        '../assets/bajaj.png',
        '../assets/wipro.png',
      ],
    },
    {
      name: 'Startups',
      hiring: 2.9,
      images: [
        '../assets/ception.png',
        '../assets/servio.png',
        '../assets/octopus.png',
      ],
    },
    {
      name: 'Healthcare',
      hiring: 3.8,
      images: [
        '../assets/dell.png',
        '../assets/deloitte.png',
        '../assets/microsoft.png',
      ],
    },
  ];

  scrollAmount = 920;

  scrollLeft() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft -= this.scrollAmount;
    }
  }

  scrollRight() {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft += this.scrollAmount;
    }
  }

  goToLoginPage(): void {
    this.r.navigate(['/login']);
  }

  goToRegisterPage(): void {
    this.r.navigate(['/register']);
  }
}
