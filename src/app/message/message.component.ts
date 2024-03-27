import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @Input() messages: string[] = [];
  isOpen: boolean = false;

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
