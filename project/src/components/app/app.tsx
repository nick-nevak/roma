import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
}

export default function App(props: AppScreenProps): JSX.Element {
  return (
    <MainScreen {...props} />
  );
}
