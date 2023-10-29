import { Component, OnInit } from '@angular/core';
import { Observable, filter, mapTo, merge } from 'rxjs';
import { IUser } from '../../user.interface';
import { AdminService } from '../../services/admin.service';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;

  isLoading!: Observable<boolean>;

  personalList!: Observable<IUser[]>;

  ngOnInit(): void {
    this.personalList = this.adminService.getPersonalList();

    this.hideLoader = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      mapTo(false)
    );

    this.showLoader = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      mapTo(true)
    );

    this.isLoading = merge(this.hideLoader, this.showLoader);
  }
}
