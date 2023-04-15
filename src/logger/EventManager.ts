import IEventManager from "../interfaces/IEventManager";

class EventManager implements IEventManager {
  constructor() {
    this.logs = [];
  }
  private logs: string[];
  public logEvent(event: string) {
    console.log(
      `%cNew log added! -> %c${event}, %clogs:`,
      "color:blue;font-size:14px;",
      "color:red;font-size:12px",
      "color:green;font-size:12px",
      { allLogs: this.logs }
    );
    this.logs.push(event);
  }
}

export default EventManager;
