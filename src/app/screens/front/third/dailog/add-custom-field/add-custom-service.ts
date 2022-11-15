import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { SnackbarService } from "../../../second/snackbar";
import { AddCustomDailogPage } from "./add-custom-model";

@Injectable({ providedIn : 'root'})
export class addCustomService{

    private posts: AddCustomDailogPage[]=[];
    private postUpdated = new Subject<AddCustomDailogPage[]>();

    constructor(private http: HttpClient, private snackbar: SnackbarService, private dailog: MatDialog){}

    addCustom(field: string, description: string, example: string){
        const add : AddCustomDailogPage = {id:null, field: field, description: description, example: example};

        this.http.post('http://localhost:3000/addCustom', add)
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

    getCustom(){
        this.http
        .get<{message:string, posts: any}>('http://localhost:3000/getCustom')
        .pipe(map((postsData)=>{
                    return postsData.posts.map(post => {
                        return {
                            id: post._id,
                            field: post.field,
                            description: post.description,
                            example: post.example
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

    deleteCustom(Id: string){
        this.http.delete('http://localhost:3000/deleteCustom/'+Id)
        .subscribe(()=>{
                const updatecustom = this.posts.filter(post => post.id != Id);
                this.posts = updatecustom;
                this.postUpdated.next([...this.posts])
            })
    }


}