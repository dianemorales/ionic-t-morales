import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/image/whoisthat.jpg" />
      <IonCardHeader>
        <IonCardTitle>WHO IS THAT</IonCardTitle>
        <IonCardSubtitle>HELLO</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>WELCOME TO MY PROFILE</IonCardContent>
    </IonCard>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
