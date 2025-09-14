import { Component, OnDestroy, OnInit } from '@angular/core';
import { __param } from 'tslib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy{

  public isSidenavOpen: boolean = false;

  public currentPage: string = "home";

  private sidenavsub!: Subscription;

  ngOnInIt(): void {

  }

  public

}



