import Link from "next/link";
import { getData } from './data'

import Map, { Marker } from '@components/MapLazyComponents'

export const dynamic = "force-dynamic";

export default async function Home() {
    const result = await getData() || {};

    // console.log("Data", result)

    return (
        <main>
            <div style={{
                width: '400px',
                height: '400px'
            }}>
                <Map>
                    {result.map(m => (
                        <Marker key={m.id} locationValue={[m.lat as number, m.lng as number]} id={m.id}>{m.id} - {m.name}</Marker>
                    ))}
                </Map>
            </div>
        </main>
    );
}