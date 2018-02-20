import { Injectable } from '@angular/core';

import { ConstantsMessages } from "./../constant-messages";
import { HttpCommonGatewayService } from './../services/http-common-gateway.service';

@Injectable()
export class TestApiService {

  constructor(private _httpComm: HttpCommonGatewayService) { }

  fetchContent() {
		return this._httpComm.getMethod(ConstantsMessages.URL.GET_API.FETCH);
  }
  
  saveContent() {
		return this._httpComm.postMethod(ConstantsMessages.URL.POST_API.SAVE, {} );
	}

}
