import { Component } from '@angular/core';

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly linksColumnOne: readonly FooterLink[] = [
    { label: 'The Platform', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#services' },
    { label: 'Request a Demo', href: '#cta' },
  ];

  protected readonly linksColumnTwo: readonly FooterLink[] = [
    { label: 'Contact Us', href: '#footer' },
    { label: 'About Us', href: '#insights' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ];
}
