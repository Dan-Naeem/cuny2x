//default colorway
const colorway = {
  one: '#37474f',
  two: '#d5dee2',
  three: '',
  background: '#56707c',
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
    backgroundColor: "blue",
    color: "white",
  },
  appTitle: {
    fontSize: "1.5em",
  },
  main: {
    width: '100%',
    marginTop: '1em',
    marginBottom: '1em',
    display: 'flex',
    flexDirection: 'row',

  },
  edit: {
    width: '40%',
    textAlign: 'center',
  },
  list: {
    width: '70%',
    textAlign: 'center',
  },
  card: {
    fontSize: '1em',
    width: '100%%',
    height: 'auto',
    padding: '1em',
    margin: '.5em',
  },
  ulType: {
    listStyleType: 'none',
  }
};

export {
  styles,
  colorway,
};
