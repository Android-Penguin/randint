import { IonCard, IonCardHeader, IonCardTitle, IonCol } from '@ionic/react';
import './DiceCard.css'

interface cardProps {diceName:string}

const DiceCard: React.FC<cardProps> = ({diceName}) => {
    const imgSrc = "./assets/dice/"+diceName+".svg";
    return (
        <IonCol sizeXl="3" sizeLg="3" sizeMd="4" sizeSm="6" size="6">
            <IonCard class="dice-card" href="/dice" button={true}>
                <div>
                    <img src={imgSrc} />
                </div>
                <h1>{diceName}</h1>
            </IonCard>
        </IonCol>
    );
}

export default DiceCard