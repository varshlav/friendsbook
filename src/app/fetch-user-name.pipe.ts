import { Pipe, PipeTransform } from '@angular/core';
import { FetchResponseService } from './fetch-response.service';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Pipe({
  name: 'fetchUserName',
  pure: false
})
export class FetchUserNamePipe implements PipeTransform {

  fixVal: string = '';
  userName: Observable<string>;

  constructor(private fetchServ: FetchResponseService) { }

  transform(value: string): Observable<string> {

    if (this.fixVal !== value) {
      this.fetchServ.fetchUser(value).subscribe((data: any) => {
        this.userName = of(data.firstName + " " + data.lastName);
      });
      this.fixVal = value;
      
    }
    return this.userName;

  }

}
