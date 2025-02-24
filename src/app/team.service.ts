import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';
import { Team } from './team/models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  http = inject(HttpClient);
  //data: any = firstValueFrom(this.http.get(`${environment.apiUrl}/players`));
      
        get teams() : Promise<Team[]>{
          // @ts-ignore
          
          //console.log(this.data.__zone_symbol__value.data);
          return firstValueFrom(this.http.get(`${environment.apiUrl}/teams`)).then(teams => teams.data);
        }
      
        async addTeam(team: Team): Promise<Team> {
          const newTeam = await firstValueFrom(
            this.http.post(`${environment.apiUrl}/teams/${team.league}/${team.manager}`, {
              name: team.name,
              founded: team.founded
            })
          );
          // @ts-ignore
          return newTeam;
        }
    
        async updateTeam(updatedTeam: Team, leagueId: number, managerId: number): Promise<Team> {
          // TODO: replace with a PUT request
      
          const team = await firstValueFrom(this.http.put(`${environment.apiUrl}/teams/${updatedTeam.id}/${leagueId}/${managerId}`,{
            id: updatedTeam.id,
            name: updatedTeam.name,
            founded: updatedTeam.founded
          }));
          // @ts-ignore
          return team;
        }
}
