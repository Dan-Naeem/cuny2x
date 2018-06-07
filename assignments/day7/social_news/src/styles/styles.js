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


    height: '100%',
    minHeight: '100%',
    maxHeight: '100vh',
  },
  left: {
    backgroundColor: colorway.background,
    width: '40%',
    height: 'auto',
    padding: '.5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  right: {
    backgroundColor: colorway.background,
    width: '60%',
    height: 'auto',
    padding: '.5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ulType: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '0em',
    margin: '0em',
  },
  card: {
    backgroundColor: colorway.two,
    fontSize: '1em',
    width: '100%',
    height: 'auto',
    padding: '.5em',
    margin: '.5em',
    textAlign: 'center',
    overflow: 'auto',
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
