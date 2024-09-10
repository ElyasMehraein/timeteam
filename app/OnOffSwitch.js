import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Stack, Typography } from '@mui/material';

export default function OnOffSwitch() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <Typography>Off</Typography>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography>On</Typography>

    </Stack>
  );
}
