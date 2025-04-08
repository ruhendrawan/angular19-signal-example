import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  constructor(protected data: DataService) {}

  @Output() onClickEvent = new EventEmitter<string>();

  onClick() {
    this.onClickEvent.emit();
    console.log('onClick');
    this.data.updateHellos({ name: 'buddy signal' });
  }
}
