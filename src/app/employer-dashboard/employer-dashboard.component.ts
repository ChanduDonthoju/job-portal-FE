import { Component } from '@angular/core';
import { Activity } from '../Activity';
import { Jobpost } from '../Jobpost';
import { Router } from '@angular/router';
import { EmployerServiceService } from '../employer-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent {

  showHome() {
  }

  profiledropdownOpen = false;

  toggleDropdown() {
    this.profiledropdownOpen = !this.profiledropdownOpen;
  }

  notifications: Activity[] = [
      {
        activityId: 1,
        activityType: 'Application Submitted',
        activityDate: new Date(),
        jobSeekerId: 101,
        jobPostId: 401,
        employerId: 501
      },
      {
        activityId: 2,
        activityType: 'Profile Updated',
        activityDate: new Date(),
        jobSeekerId: 102,
        jobPostId: 402,
        employerId: 502
      },
      {
        activityId: 3,
        activityType: 'Interview Scheduled',
        activityDate: new Date(),
        jobSeekerId: 103,
        jobPostId: 403,
        employerId: 503
      }
    ];
  
  
  notificationsDropdownOpen = false;

  toggleNotifications() {
    this.notificationsDropdownOpen = !this.notificationsDropdownOpen;
  }

  removeNotification(index: number) {
    this.notifications.splice(index, 1);
  }

  clearAllNotifications() {
    this.notifications = [];
  }


  //constructor(private router:Router,private service:EmployerServiceService){}
jobPostForm:FormGroup;
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
 
  jobposts:Jobpost[]=[];
  deleteMessage: string | null = null;
  showCards: boolean = false; // Boolean variable to control visibility
 
  dropdownOpen = false;
 
showboolean:boolean=false;

 jobpost:Jobpost;

  add() {
    this.router.navigate['/jobpostadd'];
    
  }
 
 
  getAllJobPosts(){
     this.service.getAllJobPost().subscribe((p)=>this.jobposts=p);
     this.showCards = true;
    //  console.log(this.jobposts);
  }
 
  // updateJobPost(jobPostId: number) {
  //   // Logic for updating a specific job post
  //   this.router.navigate(['/jobcard']);
  // }
 
 deleteJobPost(jobPostId: number) {
    this.service.deleteJobPostbyID(jobPostId).subscribe((p)=>this.jobposts=p);
  this.deleteMessage = 'Deleted successfully';

   }
   message:string="";

   

   isFormvisible:boolean=false;

   update(jobpostId: number) {
    // Show the form to update the job post
    this.showboolean=true;
    this.isFormvisible = true;
    console.log(jobpostId);
 
    // Fetch job post details by ID from the service
    this.service.getJobPostbyId(jobpostId).subscribe((jobPost) => {
      console.log("Fetched Job Post:", jobPost);
     
      // Populate the form with the job post data
      this.jobPostForm.patchValue({
        jobPostId: jobPost.jobPostId,
        title: jobPost.title,
        description: jobPost.description,
        location: jobPost.location,
        salary: jobPost.salary
      });
    });
  }
  successMessage:string="";

  onSubmit() {
    if (this.jobPostForm.valid) {
      const updatedJobPost = this.jobPostForm.value;
 
      console.log("Submitting updated job post:", updatedJobPost);
 
      // Call the update API method to update the job post in the backend
      this.service.updateJobPost(updatedJobPost.jobPostId, updatedJobPost).subscribe(
        (response) => {
          // Successfully updated job post
          console.log("Job post updated successfully:", response);
 
          // Update the job post in the local job posts array
          const index = this.jobposts.findIndex((job) => job.jobPostId === updatedJobPost.jobPostId);
          if (index !== -1) {
            this.jobposts[index] = response;  // Update the job post in the list with the updated one
          }
 
          // Hide the form after successful update
          this.isFormvisible = false;
 
          // Optionally, show a success message
          this.successMessage = "Job post updated successfully!";
        },
        (error) => {
          console.error("Error updating job post:", error);
        }
      );
    } else {
      console.log("Form is invalid");
    }
  }
 

}
