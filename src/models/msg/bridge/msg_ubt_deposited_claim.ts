import { Categories } from '../types';

class MsgUbtDepositedClaim {
  public category: Categories; // required
  public type: string; // required
  public json: any; // required
  public creator: string;

  constructor(payload: any) {
    this.category = 'bridge'; // required
    this.type = payload.type; // required
    this.json = payload.json; // required
    this.creator = payload.creator;
  }

  static fromJson(json: any) {
    return new MsgUbtDepositedClaim({
      json,
      type: json['@type'],
      creator: json.creator,
    });
  }
}

export default MsgUbtDepositedClaim;
