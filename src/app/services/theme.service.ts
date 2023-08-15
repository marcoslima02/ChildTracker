import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  tema: number = 0;
  renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2, 
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
   }

  enableDark() {
    this.renderer.addClass(this.document.body, 'dark')
    this.tema = 1;
  }

  enableLight() {
    this.renderer.removeClass(this.document.body, 'dark')
    this.tema = 0;
  }
}
