import { Component, inject } from '@angular/core';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListTeamComponent {

  teamService = inject(TeamService);
      teams: any = this.teamService.teams;
}
