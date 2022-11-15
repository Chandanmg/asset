import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { SnackbarService } from "../../snackbar";
import { AddLocationPage } from "./add-location-model";

@Injectable({ providedIn : 'root'})
export class addLocationService{

    private posts: AddLocationPage[]=[];
    private postUpdated = new Subject<AddLocationPage[]>();

    constructor(private http: HttpClient, private snackbar: SnackbarService, private dailog: MatDialog){}

    addLocation(name: string){
        const add : AddLocationPage = { id:null, name: name};

        this.http.post('http://localhost:3000/addLocation', add)
            .subscribe((response: any) => {
                if(response){
                    this.snackbar.showMessage("Location added successfully");
                    this.dailog.closeAll();
                    window.location.reload();
                }
            }),(error)=>{
                this.snackbar.showMessage("error")
            }
    }

    getAddLocation(){
        this.http
        .get<{message: string, posts: any}>('http://localhost:3000/addLocation')
        .pipe(map((postData) => {
            return postData.posts.map(post => {
                return {
                    id: post._id,
                    name: post.name,
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

    deleteLocation(locationId: string){
        this.http.delete('http://localhost:3000/addLocation/'+ locationId)
        .subscribe(()=> {
            const updateLocation = this.posts.filter(post => post.id != locationId);
            this.posts = updateLocation;
            this.postUpdated.next([...this.posts]);
            //window.location.reload();
        })
    }
}