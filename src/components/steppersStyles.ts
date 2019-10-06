import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%"
    },

    backButton: {
      marginRight: theme.spacing(1)
    },
    tittle: {
      textAlign: "center",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    downloadButton: {
      margin: "auto"
    }
  })
);
