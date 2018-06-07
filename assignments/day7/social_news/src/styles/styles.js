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
    justifyContent: 'safe-center',
    overflow: 'auto',
  },
  ulType: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'safe-center',
    width: '100%',
    padding: '0em',
    margin: '0em',
    overflow: 'none',
  },
  formCard: {
    border: '5px red solid',
    backgroundColor: colorway.two,
    fontSize: '1em',
    width: '100%',
    height: '100%',
    minHeight: '300px',
    padding: '.5em',
    margin: '.5em',
    textAlign: 'center',
  },
  card: {
    border: '5px yellow solid',
    backgroundColor: colorway.two,
    fontSize: '1em',
    width: '100%',
    height: 'auto',
    minHeight: '550px',
    padding: '.5em',
    margin: '.5em',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
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
  description: {
    border: '5px solid green',
    display: 'flex',
    flexDirection: 'column',
  },
  imgContainer: {
    border: '5px solid orange',
    width: '100%',
    height: '300px',
    minHeight: '300px',
    maxHeight: '300px',
    minHeight: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
};

export {
  styles,
  colorway,
};
