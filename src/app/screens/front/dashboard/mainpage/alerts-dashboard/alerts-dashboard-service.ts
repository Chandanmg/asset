import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SnackbarService } from '../../../firstpage/snackbar';
import { AlertDashboard } from './alerts-dashboard-model';

@Injectable({ providedIn: 'root'})
export class alertDashboardService{
    private posts: AlertDashboard[] = [];
    private postUpdated = new Subject<AlertDashboard[]>();

    constructor(private http: HttpClient, private snackbar: SnackbarService, private dailog: MatDialog){}

    getAlertTable(){
        this.http
        .get<{message: string, posts: any}>('http://localhost:3000/getAddNewAsset')
        .pipe(map((postData) => {
            return postData.posts.map(post => {
                return {
                    assetname: post.assetname,
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
}