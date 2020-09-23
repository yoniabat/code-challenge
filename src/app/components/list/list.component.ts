import { Component, OnInit } from '@angular/core';
import { EnroleeService } from 'src/app/services/enrolee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private enroleeService: EnroleeService) { }

  enrollees: Array<any> = [];
  editable = null;

  ngOnInit(): void {
    this.populateEnrollees();
  }

  populateEnrollees() {
    this.enroleeService.list().subscribe(
      enrollees => this.enrollees = enrollees
    );
  }

  handleEdit(enrollee) {
    this.editable = enrollee;
  }

  isEditable(enrollee) {
    return this.editable != null && enrollee.id == this.editable.id;
  }

  cancelUpdate() {
    this.editable = null;
  }

  updateEnrollee() {
    this.enroleeService.update(this.editable).subscribe( 
      response => console.log(response)
    );
  }
}
