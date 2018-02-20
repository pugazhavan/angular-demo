import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { ConstantsMessages } from "./../constant-messages";

import { environment } from '../../environments/environment';

@Injectable()
export class HttpCommonGatewayService {

  constructor(private _http: Http) { }

  handleError: (error: Response) => Observable<{}> = function (error: Response) {

		if (error.status === 0) {
			console.log(ConstantsMessages.ERROR_0);
			return Observable.of(null).map(obj => obj);
		}
		else if (error.status == 400) {
			console.log(ConstantsMessages.ERROR_400);
			return Observable.of(null).map(obj => obj);
		}
		else if (error.status == 401) {
			this._authService.logout();

			console.log(ConstantsMessages.ERROR_401);
			return Observable.of(null).map(obj => obj);
		}

		console.log(ConstantsMessages.COMMON_ERROR + '' + error);
		return Observable.throw(new Error(String(error.status)));

  }
  
	getMethod(getURL) {
		return this._http.get(environment.serverBaseURL + '' + getURL)
			.map((res: Response) => {

        let response = res.json();
				if (response && response.success == 1) {
          console.log(response.message);
					return response;
				}
				else {
					console.log(response.message);
					return null;
				}
			})
			.catch(this.handleError.bind(this));
	}

	postMethod(postURL, postParams) {
		return this._http.post(environment.serverBaseURL + '' +postURL, postParams)
			.map((res: Response) => {
				let response = res.json();
				if (response && response.success == 1) {
					return response;
				}
				else {
					console.log(response.message);
					return null;
				}
			})
			.catch(this.handleError.bind(this));

  }

  // getMethod(getURL) {
	// 	return this._http.get(environment.serverBaseURL + '' + getURL+ '' +'&'+ConstantsMessages.URL.PARAMS.TOKEN+'='+this.xAuthToken)
	// 		.map((res: Response) => {

  //       let response = res.json();
	// 			if (response && response.success == 1) {
	// 				return response;
	// 			}
	// 			else {
	// 				console.log(response.message);
	// 				return null;
	// 			}
	// 		})
	// 		.catch(this.handleError.bind(this));
	// }

	// getMethodWithoutParams(getURLWithoutParams) {
	// 	return this._http.get(environment.serverBaseURL + '' + getURLWithoutParams+ '' +'?'+ConstantsMessages.URL.PARAMS.TOKEN+'='+this.xAuthToken)
	// 		.map((res: Response) => {
  //       let response = res.json();
	// 			if (response && response.success == 1) {
	// 				return response;
	// 			}
	// 			else {
	// 				console.log(response.message);
	// 				return null;
	// 			}
	// 		})
	// 		.catch(this.handleError.bind(this));
	// }

	// getMethodForGoogle(getURL) {
	// 	let headers = new Headers();
	// 	let options = new RequestOptions({ headers });
	// 	return this._http.get(environment.googleBaseURL + '' + getURL+ '' +'&'+ConstantsMessages.URL.PARAMS.KEY+'='+environment.googleMapsAPIKey, options)
	// 		.map((res: Response) => {
	// 			let response = res.json();
	// 			if (response && response.results) {
	// 				return response;
	// 			}
	// 			else {
	// 				return null;
	// 			}
	// 		})
	// 		.catch(this.handleError.bind(this));
	// }

	// postMethod(postURL, postParams) {
	// 	let headers = new Headers();
	// 	headers.append('x-access-token', this.xAuthToken);
	// 	let options = new RequestOptions({ headers });

	// 	return this._http.post(environment.serverBaseURL + '' +postURL, postParams, options)
	// 		.map((res: Response) => {
	// 			let response = res.json();
	// 			if (response && response.success == 1) {
	// 				return response;
	// 			}
	// 			else {
	// 				console.log(response.message);
	// 				return null;
	// 			}
	// 		})
	// 		.catch(this.handleError.bind(this));
	// }

}
