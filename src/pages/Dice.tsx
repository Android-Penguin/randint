import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import DiceCard from '../components/DiceCard';
import './Dice.css';

interface diceProps {};

const Dice: React.FC<diceProps> = () => {
    useEffect(() => {
        document.title = "Dice Selection | randint()"
    }, []);

    return (
        <IonPage>
            {/* Header */}
            <IonHeader>
                <NavBar />
            </IonHeader>
            {/* Content */}
            <IonContent fullscreen>
                <IonGrid fixed={true}>
                    <IonRow>
                        <DiceCard diceName="d2" />
                        <DiceCard diceName="d4" />
                        <DiceCard diceName="d6" />
                        <DiceCard diceName="d8" />
                        <DiceCard diceName="d10" />
                        <DiceCard diceName="d12" />
                        <DiceCard diceName="d20" />
                        <DiceCard diceName="d100" />
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>    
    );
}

export default Dice;