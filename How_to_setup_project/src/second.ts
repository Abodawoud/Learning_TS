// Use Interface
// Interface must be implemented by class
// Used for consistency and reusability and to avoid errors
export interface takePhoto {
  cameraMode: string;
  filter: string;
  burstMode: boolean;
}
class Instagram implements takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: boolean,
  ) {}

}
const myPhoto = new Instagram('portrait', 'black and white', false);
