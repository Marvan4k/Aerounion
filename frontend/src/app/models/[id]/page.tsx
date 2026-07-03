
import ModelView from "@/components/model/Model";
import { getHelicopterById } from "@/feature/cardsHelicopters/cardsHelicoptersAPI";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function HelicopterPage({ params }: Props) {
    const { id } = await params;
    const helicopter = await getHelicopterById(Number(id));
    
    return (
        <div className="mt-30 ml-40">
            <h1>{helicopter.name}</h1>
            <p>{helicopter.description}</p>
            <p>{helicopter.price}</p>
            <ModelView modelPath={`/${helicopter.modelUrl}/scene.gltf`} />
        </div>
    );
}