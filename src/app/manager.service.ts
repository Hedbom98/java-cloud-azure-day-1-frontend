import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';
import { Manager } from './manager/models/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  http = inject(HttpClient);
  //data: any = firstValueFrom(this.http.get(`${environment.apiUrl}/managers`));
  
    get managers() : Promise<Manager[]>{
      // @ts-ignore
      
      //console.log(this.data.__zone_symbol__value.data);
      return firstValueFrom(this.http.get(`${environment.apiUrl}/managers`)).then(managers => managers.data);
    }
  
    async addManager(manager: Manager): Promise<Manager> {
      const newManager = await firstValueFrom(
        this.http.post(`${environment.apiUrl}/managers`, {
          firstName: manager.firstName,
          lastName: manager.lastName,
          age: manager.age
        })
      );
      // @ts-ignore
      return newManager;
    }

    async updateManager(updatedManager: Manager): Promise<Manager> {
  
      const manager = await firstValueFrom(this.http.put(`${environment.apiUrl}/managers/${updatedManager.id}`,{
        id: updatedManager.id,
        firstName: updatedManager.firstName,
        lastName: updatedManager.lastName,
        age: updatedManager.age
      }));
      // @ts-ignore
      return manager;
    }
}
