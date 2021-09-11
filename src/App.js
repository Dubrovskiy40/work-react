import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Footer from './Components/Footer/Footer';

import jpg1 from './Components/images/bg1.jpg';
import jpg2 from './Components/images/bg2.jpg';

function App() {
  return (
    <div className="App">
      <Header title='This is title' descr='This is Description!' />
      <Layout title='This is title' descr='This is Description!' urlBg={jpg1} />
      <Layout title='This is title' descr='This is Description!' colorBg={'#e2e2e2'} />
      <Layout title='This is title' descr='This is Description!' urlBg={jpg2} />
      <Footer />
    </div>
  );
}

export default App;
