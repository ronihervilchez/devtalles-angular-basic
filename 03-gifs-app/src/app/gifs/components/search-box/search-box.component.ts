import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control" placeholder="Buscas gifs..." />
  `,
})
export class SearchBoxComponent {}
