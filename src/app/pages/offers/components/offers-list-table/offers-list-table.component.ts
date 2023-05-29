import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { OffersDetailsInterface } from 'src/app/core/interfaces/offers-details.interface';
import { RegistrationIconService } from 'src/app/services/registration-icon.service';

@Component({
  selector: 'app-offers-list-table',
  templateUrl: './offers-list-table.component.html',
  styleUrls: [
    './offers-list-table.component.scss',
    '../../../../styles/table.scss',
  ],
})
export class OffersListTableComponent implements OnInit {
  @Input() tableData: OffersDetailsInterface[] = [];
  @Output() updateOfferById: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteOfferById: EventEmitter<number> = new EventEmitter<number>();
  public displayedColumns: string[] = [
    'id',
    'title',
    'website',
    'payment',
    'buttons',
  ];

  constructor(private registrationsIcon: RegistrationIconService) {
    registrationsIcon.registrationIcon('trash-can', 'assets/trash-can.svg');
    registrationsIcon.registrationIcon('edit', 'assets/edit.svg');
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      !changes['tableData']?.firstChange &&
      changes?.['tableData']?.currentValue
    ) {
      this.tableData = [...this.tableData];
    }
  }

  public updateOffer(offerId: number): void {
    this.updateOfferById.emit(offerId);
  }

  public deleteOffer(offerId: number): void {
    this.deleteOfferById.emit(offerId);
  }
}
