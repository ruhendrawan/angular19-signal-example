import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './hello/index/index.component';
import { EditComponent } from './hello/edit/edit.component';
import { DataService } from './hello/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndexComponent, EditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'noname parent';

  constructor(private dataHello: DataService) {}

  onEditClick() {
    this.name = 'buddy event';
    console.log('onEditClick');
  }
}
