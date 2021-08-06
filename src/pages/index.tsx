import Grid from "@material-ui/core/Grid";
import CardMovie from "components/CardMovie";

export default function Home(): JSX.Element {
  return (
    <Grid container justifyContent="center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((e) => (
        <Grid key={e}>
          <CardMovie />
        </Grid>
      ))}
    </Grid>
  );
}
