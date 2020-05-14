import { Component } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent {

  saveHotKey = 'alt+s';
  clearHotKey = 'alt+c';

  inputText: string;
  savedText: string;

  constructor(private _hotkeysService: HotkeysService) {
    this.setHotKeys();
  }

  save() {
    this.savedText = this.inputText;
    this.inputText = '';
  }

  setHotKeys() {
    this._hotkeysService.add(new Hotkey([this.saveHotKey, this.clearHotKey], (event: KeyboardEvent, combo: string): boolean => {
      if (combo === this.saveHotKey) { this.save(); }
      if (combo === this.clearHotKey) { this.inputText = ''; }
      return false; // Prevent bubbling
    }));
  }
}
