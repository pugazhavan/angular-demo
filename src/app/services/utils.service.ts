import { Output, EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  @Output() emitThisInfo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  broadcastThisInfo(message) {
		this.emitThisInfo.emit(message);
	}

}
