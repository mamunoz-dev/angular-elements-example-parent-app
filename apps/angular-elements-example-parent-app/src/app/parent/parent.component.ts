import { Component, OnInit } from '@angular/core';
import { MicroFrontEndService } from '../shared/micro-front-end.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  private readonly scriptElementId = 'example-micro-ui';
  private readonly scriptName = 'exampleScript.js';

  constructor(private microFrontEndService: MicroFrontEndService) { }

  ngOnInit(): void {
    this.microFrontEndService.setupMicroFrontEnd(this.getScriptUrl(), this.scriptName, this.scriptElementId);
  }

  private getScriptUrl(): string {
    const hostname = window.location.hostname === 'localhost' ? `${window.location.hostname}:3333` : window.location.hostname;
    return `//${hostname}`;
  }

}