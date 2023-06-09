import { Box, Typography, Stack } from '@pankod/refine-mui';
import React from 'react';
import { PieChartProps } from 'interfaces/home';
import ReactApexChart from 'react-apexcharts';

export default function PieChart({
  title,
  colors,
  series,
  value,
}: PieChartProps) {
  return (
    <Box
      id='chart'
      flex={1}
      display='flex'
      bgcolor='#fcfcfc'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      pl={3.5}
      py={2}
      gap={2}
      borderRadius='15px'
      minHeight='110px'
      width='fit-content'>
      <Stack direction='column'>
        <Typography
          fontSize={14}
          sx={{ color: (theme) => theme.customFontColor.color.fontSecondary }}>
          {title}
        </Typography>
        <Typography
          fontSize={24}
          sx={{ color: (theme) => theme.customFontColor.color.fontPrimary }}
          fontWeight={700}
          mt={1}>
          {value}
        </Typography>
      </Stack>
      <ReactApexChart
        options={{
          chart: {
            type: 'donut',
          },
          colors,
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
        }}
        series={series}
        type='donut'
        width='120px'
      />
    </Box>
  );
}
