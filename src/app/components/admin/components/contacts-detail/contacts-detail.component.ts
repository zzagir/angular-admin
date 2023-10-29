import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser } from '../../user.interface';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss'],
})
export class ContactsDetailComponent implements OnInit {
  id!: number;
  user!: Observable<IUser>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    // without resolver
    // this.activeRouter.params.subscribe((params) => (this.id = params?.['id']));
    // this.user = this.adminService.getPerson(this.id);

    // with resolver
    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user']));
  }
}
