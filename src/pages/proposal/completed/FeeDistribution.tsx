import React from 'react';
import { Typography, Container } from '@mui/material';
import DistributionBar from '@/components/DistributionBar';
import type { Proposal, VotingOption } from '@/types';
import Paragraph from '@/components/Paragraph';

interface TransactionFeeDistributionProps {
  data: Proposal;
}

const TransactionFeeDistribution = ({
  data,
}: TransactionFeeDistributionProps) => {
  const [proposal] = data.options.map((option: VotingOption) => {
    return (option.value as number[]).map((v: number, idx: number) => {
      return {
        option: option.option,
        value: v,
        label: option.label?.[idx],
        percent: v as number,
      };
    });
  });
  return (
    <Container sx={{ paddingBottom: 2 }}>
      <Paragraph spacing="sm">
        <Typography variant="h5">{data.target}</Typography>
        <DistributionBar
          data={proposal}
          renderContent={(proposal: VotingOption) => {
            return (
              <>
                <Typography color="text.primary" variant="body2">
                  {proposal.label}
                </Typography>
                <Typography color="text.primary" fontWeight={700}>
                  {proposal.value}%
                </Typography>
              </>
            );
          }}
          variant={'vote'}
        />
      </Paragraph>
    </Container>
  );
};

export default TransactionFeeDistribution;