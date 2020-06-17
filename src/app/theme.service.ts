import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Theme} from './shared/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeEmitter: BehaviorSubject<string> = new BehaviorSubject<string>('dark');

  constructor() {
  }

  setTheme = (theme) => {
    this.themeEmitter.next(theme);
    this.applyTheme(theme);
  }

  getTheme = () => {
    return this.themeEmitter.asObservable();
  }

  applyTheme = (theme) => {
    let themeMode;
    if (theme === 'dark'){
      themeMode = Theme.dark;
    }else if (theme === 'white'){
      themeMode = Theme.white;
    }
    Object.keys(themeMode).forEach(key => {
      document.documentElement.style.setProperty(`${key}`, themeMode[key]);
    });
  }


}
