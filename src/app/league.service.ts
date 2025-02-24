import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { League } from './league/models/league';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  http = inject(HttpClient);
  //data: any = firstValueFrom(this.http.get(`${environment.apiUrl}/leagues`));

  get leagues() : Promise<League[]>{
    // @ts-ignore
    
    //console.log(this.data.__zone_symbol__value.data);
    return firstValueFrom(this.http.get(`${environment.apiUrl}/leagues`)).then(leagues => leagues.data);
  }

  async addLeague(league: League): Promise<League> {
    const newLeague = await firstValueFrom(
      this.http.post(`${environment.apiUrl}/leagues`, {
        name: league.name,
        country: league.country
      })
    );
    // @ts-ignore
    return newLeague;
  }
}
