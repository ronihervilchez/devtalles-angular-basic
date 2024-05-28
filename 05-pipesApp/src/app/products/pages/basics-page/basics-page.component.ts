import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'roniher';
  public nameUpper: string = 'RONIHER';
  public fullName: string = 'RoNiHeR ViLChEz';
}
