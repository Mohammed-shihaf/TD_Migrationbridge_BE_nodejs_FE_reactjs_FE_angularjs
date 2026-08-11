import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Widget {
  id: number;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Legacy App (Angular) — served at /legacy';
  widgets: Widget[] = [];

  constructor(private http: HttpClient) {}

  // Same shared backend API as the new React app - proving both apps
  // genuinely coexist against one backend during the migration window.
  ngOnInit(): void {
    this.http.get<{ widgets: Widget[] }>('/api/widgets').subscribe({
      next: (data) => (this.widgets = data.widgets),
      error: () => (this.widgets = []),
    });
  }
}
