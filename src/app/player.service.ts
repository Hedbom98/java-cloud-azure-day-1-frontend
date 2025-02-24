import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';
import { Player } from './player/models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  http = inject(HttpClient);
  //data: any = firstValueFrom(this.http.get(`${environment.apiUrl}/players`));
    
      get players() : Promise<Player[]>{
        
        // @ts-ignore
        //console.log(this.data.__zone_symbol__value.data);
        console.log(firstValueFrom(this.http.get(`${environment.apiUrl}/players`)).then(players => players.data));
        // @ts-ignore
        return firstValueFrom(this.http.get(`${environment.apiUrl}/players`)).then(players => players.data);
      }
    
      async getPlayerById(id: number | null): Promise<Player | null> {
        console.log(id);
        
        const player = (await this.players).find(player => player.id === id);
        console.log(player);
        if(!player){
          return null;
        }
        // @ts-ignore
        return player;
      }




      async addPlayer(player: Player): Promise<Player> {
        const newPlayer = await firstValueFrom(
          this.http.post(`${environment.apiUrl}/players/${player.team}`, {
            firstName: player.firstName,
            lastName: player.lastName,
            age: player.age,
            parentClub: player.parentClub
          })
        );
        // @ts-ignore
        return newPlayer;
      }
  

      


      async updatePlayer(updatedPlayer: Player): Promise<Player> {
        // TODO: replace with a PUT request
    
        const player = await firstValueFrom(this.http.put(`${environment.apiUrl}/players/${updatedPlayer.id}/${updatedPlayer.team}`,{
          id: updatedPlayer.id,
          firstName: updatedPlayer.firstName,
          lastName: updatedPlayer.lastName,
          age: updatedPlayer.age,
          parentClub: updatedPlayer.parentClub
        }));
        // @ts-ignore
        return player;
      }
}
