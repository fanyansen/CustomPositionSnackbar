import { SnackbarProvider, useSnackbar } from "notistack";
import ReportComplete from "./ReportComplete";
import classes from "./style.module.scss";

const Child = () => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <button
      style={{ margin: "0 16px" }}
      onClick={() =>
        enqueueSnackbar("You're report is ready", { variant: "reportComplete" })
      }
    >
      Show snackbar
    </button>
  );
};

declare module "notistack" {
  interface VariantOverrides {
    reportComplete: true;
  }
}

export default function App() {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      Components={{
        reportComplete: ReportComplete
      }}
      classes={{
        /** This class should instead be applied to containerAnchorOriginTopRight,
         * but it won't work. When applied to anchorOrigintTopRight is applied twice.*/
        anchorOriginTopRight: classes.customPosition
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Child />
      </div>
    </SnackbarProvider>
  );
}
