import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  saveData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key: string) {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  clearData() {
    localStorage.clear();
  }
}
