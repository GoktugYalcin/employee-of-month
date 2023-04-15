import IEventManager from "../interfaces/IEventManager";
import IEvent from "../interfaces/Event";
import { EventTypes } from "../interfaces/EventTypes";

class EventManager implements IEventManager {
  constructor() {
    this.logs = [];
  }
  private logs: IEvent[];

  private createLogMessage(event: EventTypes, parameters: any) {
    switch (event) {
      case EventTypes.EMPLOYEE_FETCH:
        return `Employees fetched`;
      case EventTypes.PAGE_CHANGE:
        return `Page changed to ${parameters.page}`;
      case EventTypes.VOTE_INCREMENT:
        return `Vote incremented for ${parameters.name} to ${parameters.votes}`;
      default:
        return `Unknown event type: ${event}`;
    }
  }
  public logEvent(event: EventTypes, parameters: any) {
    const eventMessage = this.createLogMessage(event, parameters);
    console.log(
      `%cNew log added! -> %c${eventMessage}, %clogs:`,
      "color:blue;font-size:14px;",
      "color:red;font-size:12px",
      "color:green;font-size:12px",
      { allLogs: this.logs }
    );
    const newEvent: IEvent = {
      type: event,
      parameters: parameters,
      date: new Date(),
      message: eventMessage,
    };
    this.logs.push(newEvent);
  }
}

export default EventManager;
