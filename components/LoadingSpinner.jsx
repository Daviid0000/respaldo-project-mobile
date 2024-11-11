import { NativeBaseProvider, Spinner, View } from 'native-base';

const LoadingSpinner = () => (
  <NativeBaseProvider>
    <View style={{ marginTop: 400, alignItems: 'center' }}>
      <Spinner color="blue" size={'lg'} />
    </View>
  </NativeBaseProvider>
);

export default LoadingSpinner;
