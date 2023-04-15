import { EventTypes } from "./EventTypes";

export default interface IEventManager {
  logEvent(event: EventTypes, parameters?: any): void;
}
