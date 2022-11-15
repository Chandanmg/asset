import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { FirstPage } from "./firstpage-Model";
import { SnackbarService } from "./snackbar";

@Injectable({ providedIn : 'root'})
export class frontService{
    constructor(private http: HttpClient, private router: Router, private snackbar: SnackbarService){}

    createOrganization(name: string, country: string, address: string, city: string, state: string, post: string, currency: string){
        const first : FirstPage = {name: name, country: country, address: address, city: city, state: state, post: post, currency: currency};

        //console.log(first);

        this.http.post('http://localhost:3000/firstpage', first)
            .subscribe((response: any)=>{
                if(response){
                    this.snackbar.showMessage('Organization details setup success');
                    this.router.navigate(['/second']);
                }
            },(error)=>{
                this.snackbar.showMessage('error in setup');
            });
    }
}