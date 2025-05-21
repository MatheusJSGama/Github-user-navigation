import { Toaster } from 'react-hot-toast';

export function ToasterComponent() {
    return(
        <Toaster
      position="top-center"
      toastOptions={{
        error: {
          iconTheme: {
            primary: 'white',
            secondary: 'red',
          },
          style: {
            background: 'red',
            color: '#fff',
          },
        },
      }}
      reverseOrder={false}
    />
    )
}