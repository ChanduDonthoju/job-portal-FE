import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerServiceService } from '../employer-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Jobpost } from '../Jobpost';

@Component({
  selector: 'app-jobpostadd',
  templateUrl: './jobpostadd.component.html',
  styleUrls: ['./jobpostadd.component.css']
})
export class JobpostaddComponent {

  jobposts: Jobpost[] = [];
  jobpost:Jobpost;
  id:number;
   jobpost1: Jobpost ;
   jobPostForm: FormGroup;
   deleteMessage: string | null = null;
   successMessage: string | null = null;
   showCards: boolean = false;
   dropdownOpen = false;

  
  constructor(private router: Router, private service: EmployerServiceService) {
    // Manually define form controls
    this.jobPostForm = new FormGroup({
      jobPostId: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      salary: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }
 
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  message:string='';
  onSubmit(){
    console.log("Helloworld");
    this.service.addJobPost(this.jobPostForm.value).subscribe((p)=>this.jobpost=p);
   this.message="form submitted successfully";
   }
}
