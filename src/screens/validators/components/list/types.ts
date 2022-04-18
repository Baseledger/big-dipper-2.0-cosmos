export type ValidatorType = {
  validator: string;
  votingPower: number;
  votingPowerPercent: number;
  commission: number;
  condition: number;
  status: number;
  jailed: boolean;
  tombstoned: boolean;
  topVotingPower?: boolean; // top 34% VP
  payees?: PayeeType[];
}

export type PayeeType = {
  revenueAddress: string;
  stakingAddress: string;
  duePayment: string;
  contractStakes: string;
  ubtStakingBalance: string;
}

export type ValidatorsState = {
  loading: boolean;
  exists: boolean;
  tab: number;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  votingPowerOverall: number;
  items: ValidatorType[];
}

export type ItemType = Override<ValidatorType, { validator: AvatarName }>;
