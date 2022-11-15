
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SnackbarService } from '../../snackbar';
import { AddDepartmentPage } from './add-department-model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({ providedIn : 'root'})
export class addDepartmentService{

    private posts: AddDepartmentPage[] = [];
    private postUpdated = new Subject<AddDepartmentPage[]>();

    constructor(private http: HttpClient, private snackbar: SnackbarService, private dailog: MatDialog){}

    addDepartment( name: string){
        const add : AddDepartmentPage = { id:null, name: name};

        this.http.post('http://localhost:3000/addDepartment', add)
            .subscribe((response : any) => {
                if(response){
                    this.snackbar.showMessage("Department added succesfully");
                    this.dailog.closeAll();
                    window.location.reload();
                }
            }),(error)=>{
                this.snackbar.showMessage("error")
            }
    }

    getAddDepartment(){
        this.http
        .get<{message: string, posts: any}>('http://localhost:3000/addDepartment')
        .pipe(map((postData) => {
            return postData.posts.map(post => {
                return {
                    id: post._id,
                    name: post.name
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

    deleteDepartment(departmentId: string){
        this.http.delete('http://localhost:3000/addDepartment/'+ departmentId)
        .subscribe(()=> {
            const updateDepartment = this.posts.filter(post => post.id != departmentId);
            this.posts = updateDepartment;
            this.postUpdated.next([...this.posts]);
            //window.location.reload();
        })
    }

    
}