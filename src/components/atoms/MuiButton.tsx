import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Button } from '@material-ui/core'

export type ButtonProps = {
  label: string
}

const useStyle = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export const MuiButton = ({ label }: ButtonProps) => {
  const classes = useStyle()

  return (
    <Box className={classes.root}>
      <Button variant="contained" color="primary">
        {label}
      </Button>
      <Button variant="contained" color="secondary">
        {label}
      </Button>
    </Box>
  )
}
