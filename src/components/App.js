import React from "react";
import Grid from "./Grid";
import NavBar from "./NavBar";
import "./App.css";
import Card from "@material-ui/core/Card";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles
} from "@material-ui/core/styles";

const myTheme = createMuiTheme({
  palette: {
    type: "dark"
  },
  overrides: {
    MuiListItem: {
      root: {
        fontSize: "1rem"
      }
    }
  }
});

const Placeholder = withStyles({
  root: {
    width: "100%",
    height: "100%"
  }
})(Card);

const App = () => {
  const gridRef = React.useRef();
  return (
    <ThemeProvider theme={myTheme}>
      <div className="app">
        <NavBar
          visualize={(algoId, heuristic = "", allowDiag) => {
            gridRef.current.visualize(algoId, heuristic, allowDiag);
          }}
          clearGrid={() => {
            console.log(gridRef.current.isAnimating);
            gridRef.current.clearGrid();
          }}
          visualizeMaze={(mazeId, animateMaze) => {
            gridRef.current.visualizeMaze(mazeId, animateMaze);
          }}
        />
        <div className="content">
          <Grid ref={gridRef} />
          <div className="placeholder">
            <Placeholder />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
