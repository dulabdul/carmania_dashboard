import { Box, Typography, Stack } from '@pankod/refine-mui';
import { propertyReferralsInfo } from 'constants/index';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}
const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width='100%'>
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'>
      <Typography
        fontSize={16}
        fontWeight={500}
        sx={{ color: (theme) => theme.customFontColor.color.fontPrimary }}>
        {title}
      </Typography>
      <Typography
        fontSize={16}
        fontWeight={500}
        sx={{ color: (theme) => theme.customFontColor.color.fontPrimary }}>
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      position='relative'
      width='100%'
      height='8px'
      borderRadius={1}
      bgcolor='#e4e8ef'>
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        position='absolute'
        height='100%'
        borderRadius={1}></Box>
    </Box>
  </Box>
);

export default function PropertyRefferal() {
  return (
    <Box
      p={4}
      bgcolor='#fcfcfc'
      id='chart'
      display='flex'
      minWidth={490}
      flexDirection='column'
      borderRadius='15px'>
      <Typography
        fontSize={18}
        fontWeight={600}
        sx={{ color: (theme) => theme.customFontColor.color.fontPrimary }}>
        Property Referals
      </Typography>
      <Stack
        my='20px'
        direction='column'
        gap={4}>
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar
            key={bar.title}
            {...bar}
          />
        ))}
      </Stack>
    </Box>
  );
}
