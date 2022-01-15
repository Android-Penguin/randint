import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonList, IonListHeader, IonPopover, IonToolbar } from '@ionic/react';
import {
    home,
    ellipsisHorizontal,
} from 'ionicons/icons'
import './NavBar.css';

interface navProps { }

const NavBar: React.FC<navProps> = () => {
  return (
    <IonToolbar id="nav-toolbar">
      {/*! Home button */}
      <IonButtons slot="start">
        <IonButton href="/home" router-direction="root" class="nav-button">
          <IonIcon slot="icon-only" icon={home}></IonIcon>
        </IonButton>
      </IonButtons>

      {/* Breadcrumbs menu will go here */}

      {/* Menu button */}
      <IonButtons slot="end">
        <IonButton id="menu-button" class="nav-button">
            <IonIcon slot="icon-only" icon={ellipsisHorizontal}></IonIcon>
        </IonButton>
      </IonButtons>
      {/* Menu popover */}
      <IonPopover id="popup-menu" trigger="menu-button" mode="ios" arrow={true} dismissOnSelect={true}>
        <IonContent>
          <IonList id="popup-menu-list">
            <IonListHeader>Menu</IonListHeader>
            <IonItem button href="/dice" detail={false}>Roll dice</IonItem>
            <IonItem button detail={false}> Randomise list</IonItem>
            <IonItem button detail={false}> Random number</IonItem>
            <IonItem button detail={false}>History</IonItem>
            <IonItem button detail={false}>Settings</IonItem>
            <IonItem button detail={false}>About</IonItem>
            
          </IonList>
        </IonContent>
      </IonPopover>
    </IonToolbar>
  );
};

export default NavBar;