import Head from "next/head";
import Link from "next/link";

function LibraryPage() {
    return (
        <>
        <Head>
            <title>Catalogus - Zonnestraal</title>
        </Head>

            <h1>This is the library</h1>

            <h2>Most used books</h2>
            <ul>
                <li>
                    <Link href="/bibliotheek/Harry-Potter">Harry Potter</Link>
                </li>
                <li>
                    <Link href="/bibliotheek/Marc-De-Belle">Marc De Bell</Link>
                </li>
            </ul>
        </>
    );
};

export default LibraryPage;