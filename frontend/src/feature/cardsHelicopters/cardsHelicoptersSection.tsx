import { useEffect, useState } from "react";
import { getHelicopters } from "./cardsHelicoptersAPI";

type Card = {
    id: number,
    name: string,
    manufacturer: string,
    description: string,
    price: number,
    maxSpeed: number,
    capacity: number,
    range: number,
    flightTime: number,
    previewImage: string,
    modelUrl: string,
}

export default function CardsHelicoptersSection(){
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        const loadCards = async () => {
            try {
                const data = await getHelicopters();
                setCards(data);
            } catch (error) {
                console.log(error)
            }
        };

        loadCards();
    })

    return (
        <div>
            {cards.map((friend) => (
                <p className="mt-30 ml-60" key={friend.id}>
                    {friend.name}
                </p>
            ))}
        </div>
    )
}