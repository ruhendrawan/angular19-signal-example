import { Injectable, signal } from '@angular/core';

interface Hellos {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private hellos = signal<Hellos>({
    name: 'noname service',
  });

  constructor() {}

  getHellos() {
    return this.hellos();
  }

  updateHellos(hellos: Hellos) {
    this.hellos.update((current) => hellos);
  }
}
