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
    justifyContent: 'center',


    height: '100%',
    minHeight: '100%',
    maxHeight: '100vh',
  },
  right: {
    backgroundColor: colorway.background,
    width: '70%',
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
    backgroundColor: colorway.two,
    fontSize: '1em',
    width: '100%',
    height: 'auto',
    padding: '.5em',
    margin: '.5em',
    flexShrink: '0',
    flexDirection: 'column',
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
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  imgContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  uploadButton: {
    width: '100%',
  },
};

export {
  styles,
  colorway,
};
