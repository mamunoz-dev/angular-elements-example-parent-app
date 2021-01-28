import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroFrontEndService {

  setupMicroFrontEnd(scriptUrl: string, scriptName: string, scriptElementId: string) {
    if (!this.isMicroFrontEndScriptAppendedToHead(scriptElementId)) {
      this.appendMicroFrontEndScriptToHead(scriptUrl, scriptName, scriptElementId);
    }
  }

  private appendMicroFrontEndScriptToHead(scriptUrl: string, scriptName: string, scriptElementId: string) {
    const scriptElement = document.createElement('script');
    scriptElement.src = `${scriptUrl}/${scriptName}`
    scriptElement.type = 'text/javascript';
    scriptElement.id = scriptElementId;
    document.head.appendChild(scriptElement);
  }

  private isMicroFrontEndScriptAppendedToHead(scriptElementId: string) {
    return document.getElementById(scriptElementId);
  }
}