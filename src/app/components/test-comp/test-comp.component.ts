import { Component, OnInit } from '@angular/core';

import { UtilsService } from "./../../services/utils.service";
import { TestApiService } from "./../../services/test-api.service";

import { HttpCommonGatewayService } from './../../services/http-common-gateway.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css'],
  providers: [UtilsService, HttpCommonGatewayService, TestApiService,]
})
export class TestCompComponent implements OnInit {

  content: string = 'lorem ipsum';
  apiGetMessage: string = '';
  apiPostMessage: string = '';

  constructor(private utils: UtilsService, private _testApiService: TestApiService) { }

  ngOnInit() {
    setTimeout( () => {
      this.utils.broadcastThisInfo(this.content);
    },3000);

    this._testApiService.fetchContent().subscribe(
			response => {
				if (response && response.success == 1) {
            this.apiGetMessage = response.message;
            this.postData();
				}
				else {
					this.apiGetMessage = '';
				}
			}
		);

  }

  postData() {
    this._testApiService.saveContent().subscribe(
			response => {
				if (response && response.success == 1) {
						this.apiPostMessage = response.message;
				}
				else {
					this.apiPostMessage = '';
				}
			}
		);
  }

}
