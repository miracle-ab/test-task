import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CampaignDetailsInterface } from 'src/app/core/interfaces/campaign-details.interface';
import { RegistrationIconService } from 'src/app/services/registration-icon.service';

@Component({
  selector: 'app-campaign-list-table',
  templateUrl: './campaign-list-table.component.html',
  styleUrls: [
    './campaign-list-table.component.scss',
    '../../../../styles/table.scss',
  ],
})
export class CampaignListTableComponent implements OnInit {
  @Input() tableData: CampaignDetailsInterface[] = [];
  @Output() updateCampaignById: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() deleteCampaignById: EventEmitter<number> =
    new EventEmitter<number>();
  public displayedColumns: string[] = [
    'id',
    'title',
    'linkToOffers',
    'buttons',
  ];

  @ViewChild(MatSort) sort: MatSort | undefined;
  public dataSource: any;

  constructor(private registrationsIcon: RegistrationIconService) {
    registrationsIcon.registrationIcon('trash-can', 'assets/trash-can.svg');
    registrationsIcon.registrationIcon('edit', 'assets/edit.svg');
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      !changes['tableData']?.firstChange &&
      changes?.['tableData']?.currentValue
    ) {
      this.tableData = [...this.tableData];
      this.dataSource = new MatTableDataSource(this.tableData);
    }
  }

  public updateCampaign(campaignId: number): void {
    this.updateCampaignById.emit(campaignId);
  }

  public deleteCampaign(campaignId: number): void {
    this.deleteCampaignById.emit(campaignId);
  }
}
