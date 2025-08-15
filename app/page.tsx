import ProductCard from "./components/ProductCard";
import Link from "next/dist/client/link";
import { getServerSession } from "next-auth/next";
import Image from "next/image";

export default async function Home() {
    const session = await getServerSession();
    return (
        <main className="relative h-screen">
            <Image
                src="https://miro.medium.com/max/3840/1*mdp4t-Km-BMRlledU1-vlQ.png"
                alt="React + TypeScript Cover"
                fill
                // style={{ objectFit: "cover" }}
                className="object-cover"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw,33vw"
                quality={75}
                priority
            />
        </main>
    );
}
