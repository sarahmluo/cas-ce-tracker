import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { CEData } from '../models/cedata';
import { CEDataService } from '../services/cedata.service';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { ErrorCodes } from '../utils/errors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit, OnDestroy {
  public ceData: CEData = new CEData();
  public year: number;
  public showError = false;
  public errorMessage: string;
  private ceDataSub: Subscription;

  constructor(
    private ceDataService: CEDataService,
    private modalCtrl: ModalController
  ) {}

  public ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.ceDataSub = this.ceDataService.ceData.subscribe(
      (ceData) => {
        this.ceData = ceData;
        this.errorMessage = '';
      },
      (error) => {
        this.handleError(error);
        this.showError = true;
      }
    );
  }

  public ionViewWillEnter(): void {
    this.ceDataService.getCEComplianceData(this.year).subscribe(
      () => {},
      (error) => {
        this.handleError(error);
        this.showError = true;
      }
    );
  }

  public ngOnDestroy(): void {
    if (this.ceDataSub) {
      this.ceDataSub.unsubscribe();
    }
  }

  public async onAddCE(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AddExperienceComponent,
    });

    return await modal.present();
  }

  public updateYear(year: number) {
    this.year = year;
    this.ceDataService.getCEComplianceData(year).subscribe(
      () => {},
      (error) => {
        this.handleError(error);
        this.showError = true;
      }
    );
  }

  private handleError(error: HttpErrorResponse): void {
    const status = error.status;
    switch (status) {
      case ErrorCodes.NotFound:
        this.errorMessage = `No data found for ${this.year}`;
        break;
      default:
        this.errorMessage = 'An error occurred, please try again';
    }
  }
}
