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
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {
    this._loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private _organizeHistory(tag: string): void {
    tag = tag.trim().toLowerCase();
    this._tagsHistory = new Set([tag, ...this._tagsHistory].slice(0, 10));
    this._saveLocalStorage();
  }

  private _saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify([...this._tagsHistory]));
  }

  private _loadLocalStorage(): void {
    const history = localStorage.getItem('history');
    if (!history) return;
    this._tagsHistory = new Set(JSON.parse(history));
    const defaultTag = this._tagsHistory.values().next().value ?? '';
    this.searchTag(defaultTag);
  }

  searchTag(tag: string): void {
    if (!tag.trim().length) return;
    this._organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', tag);
    this.http
      .get<SearchResponse>(`${this._serviceUrl}/search`, { params })
      .subscribe((response) => (this.gifList = response.data));
  }
}
