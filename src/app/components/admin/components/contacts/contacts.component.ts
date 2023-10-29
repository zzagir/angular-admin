import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, mapTo, merge } from 'rxjs';
import { IUser } from '../../user.interface';
import { AdminService } from '../../services/admin.service';
import {
  ActivatedRoute,
  ResolveEnd,
  ResolveStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  personalList!: Observable<IUser[]>;

  ngOnInit(): void {
    // without resolver
    // this.personalList = this.adminService.getPersonalList();

    // with resolver
    this.personalList = this.activatedRoute.data.pipe(
      map((data) => data?.['users'])
    );
  }
}
