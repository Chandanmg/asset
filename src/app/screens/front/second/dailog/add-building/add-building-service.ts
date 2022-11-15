
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SnackbarService } from './snackbar';
import { AddBuildingPage } from './add-building-model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({ providedIn : 'root'})
export class addBuildingService{

    private posts: AddBuildingPage[] = [];
    private postUpdated = new Subject<AddBuildingPage[]>();

    constructor(private http: HttpClient, private snackbar: SnackbarService, private dailog: MatDialog){}

    addbuilding( name: string, floors: string, address: string, city: string, state: string, country: string){
        const add : AddBuildingPage = { id:null, name: name, floors: floors, address: address, city: city, state: state, country: country };

        this.http.post('http://localhost:3000/addbuilding', add)
            .subscribe((response : any) => {
                if(response){
                    this.snackbar.showMessage("Building added succesfully");
                    this.dailog.closeAll();
                    window.location.reload();
                }
            }),(error)=>{
                this.snackbar.showMessage("error")
            }
    }

    getAddBuilding(){
        this.http
        .get<{message: string, posts: any}>('http://localhost:3000/addbuilding')
        .pipe(map((postData) => {
            return postData.posts.map(post => {
                return {
                    id: post._id,
                    name: post.name,
                    floors: post.floors,
                    address: post.address,
                    city: post.city,
                    state: post.state,
                    country: post.country,
                }
            })
        }))
        .subscribe(post => {
            this.posts = post,
            this.postUpdated.next([...this.posts]);
        })
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    deleteBuilding(buildingId: string){
        this.http.delete('http://localhost:3000/addbuilding/'+ buildingId)
        .subscribe(()=> {
            const updateBuilding = this.posts.filter(post => post.id != buildingId);
            this.posts = updateBuilding;
            this.postUpdated.next([...this.posts]);
            //window.location.reload();
        })
    }

    
}