import { Component, OnInit } from '@angular/core';
import { UtilsService } from "./../../services/utils.service";

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  providers: []
})

export class Test2Component implements OnInit {

  receivedContent: string = '';

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.utils.emitThisInfo.subscribe((messageContent) => {
        this.receivedContent = messageContent;
    });
  }

}
