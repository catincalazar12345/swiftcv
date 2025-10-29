import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Form  from './components/Form'
import './App.css';
export default function App() {
  return <MantineProvider>{<Form/>}</MantineProvider>;
}