export class EmitEvent {
  name: string;
  message: string;

  constructor(event: string, message: string) {
    this.name = event;
    this.message = message;
  }


}

export class Events {
  static SUB_COMPONENT_A_EVENT: string;

}
