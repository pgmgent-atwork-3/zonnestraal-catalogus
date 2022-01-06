import Head from "next/head";
import Link from "next/link";


function LibraryPage() {
  const books = [
    {
      id: 1,
      title: "Book one",
      slug: "one"
    },
    {
      id: 2,
      title: "Book two",
      slug: "two"
    },
    {
      id: 3,
      title: "Book three",
      slug: "three"
    },
  ]

    return (
        <>
        <Head>
            <title>Catalogus - Zonnestraal</title>
        </Head>

            <h1>This is the library</h1>

            <h2>Most used books test</h2>

            <ul>
              {books.map((b) => (
                <li key={b.id}>
                  <Link
                    href={'/bibliotheek/' + b.id}
                  >
                    <a>
                      <h3>{b.title}</h3>
                      <span>{b.id}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
        </>
    );
};

export default LibraryPage;