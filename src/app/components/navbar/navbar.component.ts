import { Component } from '@angular/core';
import { faInstagram, faGithub ,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faInstagram = faInstagram;
  faGithub=faGithub;
  faLinkedin=faLinkedin;
  faKey=faKey
}
