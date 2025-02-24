import { Component, inject } from '@angular/core';
import { LeagueService } from '../../league.service';
import { League } from '../models/league';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListLeagueComponent {

  
  leagueService = inject(LeagueService);
  leagues: any = this.leagueService.leagues;
}
