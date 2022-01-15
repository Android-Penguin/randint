import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home | randint()"
  }, []);

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
          <NavBar />
      </IonHeader>
      {/* Content */}
      <IonContent fullscreen>
        <div id="home-container">
          <h1 id="home-title">randint()</h1>
          <IonButton href="/dice" size="large">
            Roll dice
          </IonButton>
          <IonButton size="large">
            Randomise list
          </IonButton>
          <IonButton size="large">
            Random number
          </IonButton>
          <IonButton size="large">
            History
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
