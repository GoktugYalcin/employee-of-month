import { EventTypes } from "./EventTypes";

export default interface Event {
  type?: EventTypes;
  parameters?: unknown;
  date?: Date;
  message: string;
}
