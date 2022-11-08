import { Box, Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

const MuiCheckbox = () => {
    const [checked, setChecked] = React.useState(false)
    console.log('accept', checked)
  return (
   <Box>
    <Box>
        <FormControlLabel label="I accept Terms and conditions" control={<Checkbox
        value={checked} onChange={(e) =>setChecked(e.target.checked)}/>} />
    </Box>
   </Box>
  )
}

export default MuiCheckbox