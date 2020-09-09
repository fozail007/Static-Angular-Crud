import { Component, OnInit } from '@angular/core';


class Registration{
  constructor(
    public name: string='',
    public email:string='',
    public course:string=''
  ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrations: Registration[] =[];

  regModel:Registration;

  showNew:Boolean= false;

  submitType: string='Save';

  selectedRow:number;

  constructor(){

    this.registrations.push(new Registration('FOZAIL','FOZAIL@GMAIL.COM','MTECH'));
    this.registrations.push(new Registration('JACK','JACK@GMAIL.COM','MCA'));
    this.registrations.push(new Registration('JILL','JILL@GMAIL.COM','BTECH'));
    this.registrations.push(new Registration('SHAK','SAHKE@GMAIL.COM','MTECH'));
  }
  

  

 
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
}
   onNew()
   {
     this.regModel=new Registration();

     //changes submit type to save
     this.submitType= 'Save';
     // show resgistration entry system
     this.showNew = true;
   }

   onSave()
   {
     if(this.submitType ==='Save')
     {

       this.registrations.push(this.regModel);
     }
     else{

      //update the existing property
       this.registrations[this.selectedRow].name=this.regModel.name;
       this.registrations[this.selectedRow].email = this.regModel.email;
       this.registrations[this.selectedRow].course=this.regModel.course;


     }

      // hide  registration entry section
      this.showNew=false;
   }
    
   onEdit(index: number)
   {
     this.selectedRow= index;

     //initiate new registrations

      this.regModel= new Registration();
      // Retrieve selected registration from list and assign to model.

      this.regModel= Object.assign({}, this.registrations[this.selectedRow]);

      this.submitType='Update';

      this.showNew=true;
   }
   onDelete(index: number)
   {
     this.registrations.splice(index,1);
   }

   onCancel()
   {
     this.showNew=false;
   }

}
