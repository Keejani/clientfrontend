import { Component } from '@angular/core';
import { QueryparamService } from '../../services/param/queryparam.service';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export class AuthorizationComponent {

  constructor(private QueryParams : QueryparamService, private auth : AuthService, private route : ActivatedRoute, private router : Router){}

  id!: string;

  ngAfterViewInit(): void {
     this.authenticateUser();
 }

 authenticateUser(): void {
   this.QueryParams.getAttributeFromUrl('id').pipe(
     switchMap(id => this.auth.authorizeOAuth({Id : id}))
   ).subscribe({
     next: (n : any) => {
       console.log(n)
       this.auth.generalStorageFtn(n.refreshToken, 'ref_tkn')
       this.auth.generalStorageFtn(n.user.id, 'uId')
       this.auth.storeJwt(n.token)
       this.router.navigate(['/market'])
     },
     error: (e) => {

     },
     complete: () => {
     }
   });

   this.route.queryParams.subscribe({
    next: (n : any) => {
      const email = n.email;
      const code = n.nucode;

      this.auth.verifyUser(email,code).subscribe({
        next: (n : any) => {
          this.router.navigate([''])
        }
      })
    }
   })
 }


}
