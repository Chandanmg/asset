import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Subscription } from "rxjs";
import { map } from "rxjs/internal/operators/map";
import { format } from "url";
import { Auth } from "./auth.model";
import { SnackbarService } from "./snackbar";
import { of } from 'rxjs';


@Injectable({ providedIn : 'root'})
export class authService{
    private postUpdated = new Subject<Auth[]>();

    private postSub: Subscription;

    //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

    posts: Auth[] = [];

    username: any;

    messageSuccess = true;

    @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>(); 

    constructor(private http: HttpClient, private router: Router, private snackbar: SnackbarService){}

    createUser(firstname: string, lastname: string, email: string, password: string){
        const authdata: Auth = { firstname: firstname, lastname: lastname, email: email, password: password };
        //console.log(authdata);
        this.http.post("http://localhost:3000/signup", authdata)
            .subscribe((response: any) => {
                if(response){
                    this.snackbar.showMessage('User created succesfully');
                    //this.router.navigate([''])
                }
            },(error)=>{
                this.snackbar.showMessage('error in signup');
            });
            
        
    }

    loginUser(firstname: string, lastname: string, email: string, password: string){
        const authdata: Auth = { firstname: firstname, lastname: lastname, email: email, password: password };
        //console.log(authdata);
        this.http.post("http://localhost:3000/login", authdata)
            
            .subscribe((response: any) => {
                // console.log(response);
                if(response){
                    // console.log(authdata);
                    this.snackbar.showMessage('Login succesfull');
                    this.router.navigate(['/dashboard']);
                    this.fireIsLoggedIn.emit(email);
                }
            },(error)=>{
                this.snackbar.showMessage('Login failed');
            });
    }

    getEmitter() { 
        return this.fireIsLoggedIn; 
    } 

    // getCurrentUser(customObject){
    //     this.http.get<{message: string, posts: any}>('http://localhost:3000/login/'+customObject)
    //     .subscribe((res) => {
    //         this.username = res.posts.firstname;
    //         console.log(this.username);
    //       })
    //     // .subscribe(post => {
    //     //     this.posts = post,
    //     //     this.postUpdated.next([...this.posts]);
    //     // })
    // }
    // getPostUpdateListener(){
    //     return this.postUpdated.asObservable();
    // }

    
    getCurrentUser(customObject){
        // let data = [];
        this.http.get<{message: string, posts: any}>('http://localhost:3000/login/'+customObject)
        .subscribe((res) => {
            this.username = res.posts.firstname;
        })
          
    }
    

    // getCurrentUser(customObject){
    //     this.http
    //     .get<{message: string, posts: any}>('http://localhost:3000/login/'+customObject)
    //     .subscribe(post => {
    //         this.username = post.posts.firstname;
    //         // console.log(this.username)
    //         // this.posts = post,
    //         // this.postUpdated.next([...this.posts]);
    //   })
    // }

    

    user() {
        // setTimeout(()=>{          
        //     return this.username,                 
        //     console.log(this.username);
        // }, 1000);
        return this.username;
        // console.log(this.username);

        
    }
    
}