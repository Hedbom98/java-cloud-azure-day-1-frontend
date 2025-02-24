import { Component, Input } from '@angular/core';
import { Manager } from '../models/manager';

@Component({
  selector: 'app-manager-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemManagerComponent {
  @Input('manager') manager: Manager | null = null;
}
