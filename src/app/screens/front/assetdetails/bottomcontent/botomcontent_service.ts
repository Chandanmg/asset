import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SnackbarService } from '../../firstpage/snackbar';
import { AssetBottomDetails } from './bottomcontent_model';

@Injectable({ providedIn: 'root'})
export class assetBottomDetailsService{
    // private posts: AssetBottomDetails[] = [];
    // private postUpdated = new Subject<AssetBottomDetails[]>();

    // constructor(private http: HttpClient, private snackbar: SnackbarService, private dailog: MatDialog){}

    // getInsurace(){
    //     this.http
    //     .get<{message: string, posts: any}>('http://localhost:3000/getAddNewAsset')
    //     .pipe(map((postData) => {
    //         return postData.posts.map(post => {
    //             return {
    //                 insurancenumber: post.insurancenumber,
    //                 insurancevendor: post.insurancevendor,
    //                 insuranceinsuredvalue: post.insuranceinsuredvalue
    //             }
    //         })
    //     }))
    //     .subscribe(post => {
    //         this.posts = post,
    //         this.postUpdated.next([...this.posts]);
    //     })
    // }

    // getMaintenance(){
    //     this.http
    //     .get<{message: string, posts: any}>('http://localhost:3000/getAddNewAsset')
    //     .pipe(map((postData) => {
    //         return postData.posts.map(post => {
    //             return {
    //                 maintenancedue: post.maintenancedue,
    //                 insurancevendor: post.insurancevendor,
    //                 purchasedate: post.purchasedate
    //             }
    //         })
    //     }))
    //     .subscribe(post => {
    //         this.posts = post,
    //         this.postUpdated.next([...this.posts]);
    //     })
    // }

    // getPostUpdateListener(){
    //     return this.postUpdated.asObservable();
    // }
}