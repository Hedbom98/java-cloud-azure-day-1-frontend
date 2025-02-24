import { Component, inject } from '@angular/core';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListManagerComponent {

  managerService = inject(ManagerService);
    managers: any = this.managerService.managers;
}
