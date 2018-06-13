//default colorway
const colorway = {
  one: '#B38353',
  two: '#FFE0C2',
  three: '',
  background: 'white',
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
    backgroundColor: colorway.two,
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
