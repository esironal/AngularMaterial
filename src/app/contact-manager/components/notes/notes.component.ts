import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Note } from '../../models/note';
import { MatTableDataSource, MatPaginator, MatTable, MatSort } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns = ['id', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;

  constructor() { 
  }

  ngOnInit() {  
    this.dataSource = new MatTableDataSource<Note>(this.notes);  
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter =  filterValue.trim();
  }
}