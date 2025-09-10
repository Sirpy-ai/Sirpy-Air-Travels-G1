
export type Page = 'Homepage' | 'Flight Booking' | 'Special Offers' | 'About Us' | 'Contact' | 'Blog / Travel Tips';

export interface Testimonial {
  quote: string;
  name: string;
  photoUrl: string;
}

export interface Offer {
    title: string;
    cta: string;
}

export interface TeamMember {
    name: string;
    role: string;
    photoUrl: string;
}

export interface BlogPost {
    title: string;
    imageUrl: string;
    cta: string;
}
