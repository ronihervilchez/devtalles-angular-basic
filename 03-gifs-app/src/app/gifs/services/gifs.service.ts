import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifList: Gifs[] = [];
  private _tagsHistory = new Set<string>();
  private _apiKey = 'vZYnFMJLhqi2o6c0L20Aq5FEZvqk2n0T';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.trim().toLowerCase();
    this._tagsHistory = new Set([tag, ...this._tagsHistory].slice(0, 10));
  }

  searchTag(tag: string): void {
    if (!tag.trim().length) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', tag);
    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((response) => (this.gifList = response.data));
  }
}
