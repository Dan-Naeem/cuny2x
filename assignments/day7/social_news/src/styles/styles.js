//default colorway
const colorway = {
  one: 'darkslateblue',
  two: 'white',
  three: '',
  background: '#938CC5',
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '.5em',
    fontSize: '1em',
    boxSizing: 'border-box',
  },
  appHeader: {
    backgroundColor: colorway.one,
    color: "white",
  },
  appTitle: {
    fontSize: "1.5em",
  },
  main: {
    backgroundColor: colorway.background,
    width: '100%',
    marginTop: '1em',
    marginBottom: '1em',
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    width: '50%',
    height: 'auto',
  },
  right: {
    width: '50%',
    height: 'auto',
  },
  card: {
    backgroundColor: colorway.two,
    fontSize: '1em',
    width: '100%',
    height: 'auto',
    padding: '1em',
    margin: '.5em',
  },
};

export {
  styles,
  colorway,
};
