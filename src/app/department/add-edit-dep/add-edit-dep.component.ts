import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dep: any
  DepartmentId: string
  DepartmentName: string

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId
    this.DepartmentName = this.dep.DepartmentName
  }

  addDepartment() {
    var value = {DepartmentId: this.DepartmentId, DepartmentName: this.DepartmentName}
    this.service.addDepartment(value).subscribe(response => {
      alert(response.toString())
    })
  }

  updateDepartment() {
    var value = {DepartmentId: this.DepartmentId, DepartmentName: this.DepartmentName}
    this.service.updateDepartment(value).subscribe(response => {
      alert(response.toString())
    })
  }

}
