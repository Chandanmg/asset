import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { SnackbarService } from "src/app/screens/auth/snackbar";
import { AddAssetMainPage } from "./addnewasset.model"

@Injectable({providedIn: 'root'})
export class addNewAssetService{

    private posts: AddAssetMainPage[]=[];
    private postUpdated = new Subject<AddAssetMainPage[]>();

    constructor(private http: HttpClient, private snackbar: SnackbarService){}

    addAsset(
        assetname: string,
        assetserial: string,
        basiccost: number,
        basicbrand: string,
        assettype: string,
        purchasedate: string,
        basicvendorname: string,
        basicassetmodel: string, 
        
        warduedate: string,
        warrentyexpiryreminder: string,
        warnotifyto: string,
    
        allocatetobuilding: string,
        allocatetodepartment: string,
        allocatetolocation: string,
        allocatetoperson: string,
    
        maintenancedue: string,
        maintainancereminder: string,
        maintainancenotifyto: string,
        insurancenumber: string,
        insurancedue: string,
        insurancevendor: string,
        insurancenotifyto: string,
        insurancereminder: string,
        insuranceinsuredvalue: string,
    
        licencenumber: string,
        licencedate: string,
        licensenotify: string,
        licencereminder: string,
    
        leasestartdate: string,
        leaseenddate: string,
        leasenotify: string,
        leasedfrom: string,
    
        depreciablecost: string,
        depreciablesalvationvalue: string,
        depreciablebegindate: string,
        depreciableassetlife: string,
        depreciablemethod: string
    )
    {
        const first : AddAssetMainPage = { 
            assetname: assetname, 
            assetserial: assetserial, 
            basiccost: basiccost, 
            basicbrand: basicbrand, 
            assettype: assettype, 
            purchasedate: purchasedate, 
            basicvendorname: basicvendorname, 
            basicassetmodel: basicassetmodel,

            warduedate: warduedate,
            warrentyexpiryreminder: warrentyexpiryreminder,
            warnotifyto: warnotifyto,
        
            allocatetobuilding: allocatetobuilding,
            allocatetodepartment: allocatetodepartment,
            allocatetolocation: allocatetolocation,
            allocatetoperson: allocatetoperson,
        
            maintenancedue: maintenancedue,
            maintainancereminder: maintainancereminder,
            maintainancenotifyto: maintainancenotifyto,

            insurancenumber: insurancenumber,
            insurancedue: insurancedue,
            insurancevendor: insurancevendor,
            insurancenotifyto: insurancenotifyto,
            insurancereminder: insurancereminder,
            insuranceinsuredvalue: insuranceinsuredvalue,
        
            licencenumber: licencenumber,
            licencedate: licencedate,
            licensenotify: licensenotify,
            licencereminder: licencereminder,
        
            leasestartdate: leasestartdate,
            leaseenddate: leaseenddate,
            leasenotify: leasenotify,
            leasedfrom: leasedfrom,
        
            depreciablecost: depreciablecost,
            depreciablesalvationvalue: depreciablesalvationvalue,
            depreciablebegindate: depreciablebegindate,
            depreciableassetlife: depreciableassetlife,
            depreciablemethod: depreciablemethod

        };
        this.http.post('http://localhost:3000/addnewasset', first)
            .subscribe((response: any) => {
                if(response){
                    this.snackbar.showMessage("successfull.......")
                }
            },(error)=>{
                this.snackbar.showMessage("error")
            })
    }


    // getAssetType(){
    //     this.http
    //     .get<{message:string, posts: any}>('http://localhost:3000/getAsset')
    //     .pipe(map((postsData)=>{
    //                 return postsData.posts.map(post => {
    //                     return {
    //                         // id: post._id,
    //                         assettype: post.name,
    //                     }
    //                 })
    //             }))
    //             .subscribe(post => {
    //                 this.posts = post,

    //                 this.postUpdated.next([...this.posts])
    //             })
    // }

    // getBuilding(){
    //     this.http
    //     .get<{message: string, posts: any}>('http://localhost:3000/addbuilding')
    //     .pipe(map((postData) => {
    //         return postData.posts.map(post => {
    //             return {
    //                 allocatetobuilding: post.name,
    //             }
    //         })
    //     }))
    //     .subscribe(post => {
    //         this.posts = post,
    //         this.postUpdated.next([...this.posts]);
    //     })
    // }

    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }
    
}