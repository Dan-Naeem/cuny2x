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
  main: {
    backgroundColor: colorway.background,
    width: '100%',
    margin: '.5em',
    padding: '.5em',
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    width: '40%',
    height: 'auto',
    padding: '.5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  right: {
    width: '60%',
    height: 'auto',
    padding: '.5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: colorway.two,
    fontSize: '1em',
    width: '100%',
    height: 'auto',
    padding: '.5em',
    margin: '.5em',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  textField: {
    width: '100%',
    padding: '.5em',
  },
};

export {
  styles,
  colorway,
};
