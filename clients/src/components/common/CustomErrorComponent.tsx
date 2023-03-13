import { ArrowBack, ErrorOutline } from '@mui/icons-material';
import { Box, Stack, Typography } from '@pankod/refine-mui';

import CustomButton from './CustomButton';
import { useNavigate } from '@pankod/refine-react-router-v6';

export default function CustomErrorComponent() {
  const navigate = useNavigate();
  return (
    <Box
      justifyContent='center'
      alignItems='center'
      sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <Stack
        justifyContent='center'
        mt='160px'
        alignItems='center'
        direction='column'>
        <Stack direction='row'>
          <ErrorOutline
            sx={{ fontSize: 100 }}
            color='error'
          />
          <Typography
            variant='h1'
            fontSize={84}
            fontWeight={600}
            sx={{
              color: (theme) => theme.customFontColor.color.fontSecondary,
            }}>
            500!
          </Typography>
        </Stack>
        <Typography
          mt={1}
          fontSize={16}
          sx={{ color: (theme) => theme.customFontColor.color.fontPrimary }}>
          Sorry, the requested not completed because have a problem
        </Typography>
        <Typography
          fontSize={16}
          sx={{ color: (theme) => theme.customFontColor.color.fontPrimary }}
          mb={2}>
          please go back or refresh the pages
        </Typography>
        <CustomButton
          type='button'
          title='Back Home'
          icon={<ArrowBack />}
          color='#fff'
          backgroundColor='#20a6a0'
          handleClick={() => navigate('/')}
        />
      </Stack>
    </Box>
  );
}
