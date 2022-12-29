export interface Proposal {
  id: number;
  title: string;
  description: string;
  endTime: number;
  stakeLocked: boolean;
  verifiedLevel?: number;
}