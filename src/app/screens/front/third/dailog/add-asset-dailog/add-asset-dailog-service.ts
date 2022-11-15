import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { SnackbarService } from "../../../second/snackbar";
import { AddAssetDailogPage } from "./add-asset-dailog-model";

@Injectable({ providedIn : 'root'})
export class addAssetService{

    private posts: AddAssetDailogPage[]=[];
    private postUpdated = new Subject<AddAssetDailogPage[]>();

    constructor(private http: HttpClient, private snackbar: SnackbarService, private dailog: MatDialog){}

    addAsset(name: string){
        const add : AddAssetDailogPage = {id:null, name: name};

        this.http.post('http://localhost:3000/addAsset', add)
            .subscribe((response: any) => {
                if(response){
                    this.snackbar.showMessage("asset added successfully....");
                    this.dailog.closeAll();
                    window.location.reload();
                }
            }),(error)=>{
                this.snackbar.showMessage("Error....")
            }
    }

    getAsset(){
        this.http
        .get<{message:string, posts: any}>('http://localhost:3000/getAsset')
        .pipe(map((postsData)=>{
                    return postsData.posts.map(post => {
                        return {
                            id: post._id,
                            name: post.name,
                        }
                    })
                }))
                .subscribe(post => {
                    this.posts = post,
                    this.postUpdated.next([...this.posts])
                })
    }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }

    deleteAsset(Id: string){
        this.http.delete('http://localhost:3000/deleteAsset/'+Id)
        .subscribe(()=>{
                const updateuser = this.posts.filter(post => post.id != Id);
                this.posts = updateuser;
                this.postUpdated.next([...this.posts])
            })
    }


}