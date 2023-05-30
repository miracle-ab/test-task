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
import { ApplicationsDetailsInterface } from 'src/app/core/interfaces/applications-details.interface';
import { RegistrationIconService } from 'src/app/services/registration-icon.service';

@Component({
  selector: 'app-applications-list-table',
  templateUrl: './applications-list-table.component.html',
  styleUrls: [
    './applications-list-table.component.scss',
    '../../../../styles/table.scss',
  ],
})
export class ApplicationsListTableComponent implements OnInit {
  @Input() tableData: ApplicationsDetailsInterface[] = [];
  @Output() updateApplicationById: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() deleteApplicationById: EventEmitter<number> =
    new EventEmitter<number>();
  public displayedColumns: string[] = [
    'id',
    'title',
    'isActive',
    'linkToCampaigns',
    'description',
    'version',
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

  public updateApplication(ApplicationId: number): void {
    this.updateApplicationById.emit(ApplicationId);
  }

  public deleteApplication(ApplicationId: number): void {
    this.deleteApplicationById.emit(ApplicationId);
  }
}
