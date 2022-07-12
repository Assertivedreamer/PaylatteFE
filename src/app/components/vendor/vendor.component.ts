import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {



  public form = {
    
    
    name:null,
    
    dob:null,
     
  };

  constructor(
    private Jarwis: JarwisService,
    private router: Router
  ) { }



//   onSubmit() {

//    this.Jarwis.repay(this.form).subscribe(
//      data => this.handleResponse(data),

//    );
   
//  }
 onSubmit(){
  this.Jarwis.repay(this.form) 
   .subscribe({
    next:(data)=>{
       this.handleResponse(data);
              alert("paid successfully");

                  },
    error:(error)=>{
      console.log(error.error);
      alert("paid unsuccessfully")
    }
  })

}


 handleResponse(data:any) {
   // this.Token.handle(data.access_token);
   // this.router.navigateByUrl('/login');
    // alert('paid successfully');

   this.router.navigate(['Bills'])
 }

  ngOnInit(): void {
  }

}


// deleteStudent(id:number){
//   this.api.deleteStudent(id).subscribe({
//     next:(res)=>{
//       alert("Studentdetails deleted successfully");
//       this.getAllStudents();
//     },
//     error:()=>{
//       alert("Error while getting the details")
//     }
//   })
// }
