import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _instancesRanger = 0;
  private _energyType: EnergyType = 'stamina';

  static createdArchetypeInstances(): number {
    this._instancesRanger += 1;
    return this._instancesRanger;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
