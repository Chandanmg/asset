import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { SnackbarService } from "../../snackbar";
import { AddUserPage } from "./add-user-model";

@Injectable({ providedIn : 'root'})
export class addUserService{

    private posts: AddUserPage[]=[];
    private postUpdated = new Subject<AddUserPage[]>();

    constructor(private http: HttpClient, private snackbar: SnackbarService, private dailog: MatDialog){}

    addUser(name: string){
        const add : AddUserPage = { id:null, name: name};

        this.http.post('http://localhost:3000/addUser', add)
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

    getAddUser(){
        this.http
        .get<{message: string, posts: any}>('http://localhost:3000/addUser')
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

    deleteUser(userId: string){
        this.http.delete('http://localhost:3000/addUser/'+ userId)
        .subscribe(()=> {
            const updateuser = this.posts.filter(post => post.id != userId);
            this.posts = updateuser;
            this.postUpdated.next([...this.posts]);
            //window.location.reload();
        })
    }
}