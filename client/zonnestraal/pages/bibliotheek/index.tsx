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
                    href={{
                      pathname: '/blog/[slug]',
                      query: { slug: b.title },
                    }}
                  >
                    <a>{b.title}</a>
                  </Link>
                </li>
              ))}
            </ul>

{/*             <ul>
                {books.map((book) => {
                  <li key={book.id}>
                    <Link
                      href={{
                        pathname: '/bibliotheek/[slug]',
                        query: { slug: book.title }
                      }}
                    >
                      <a>{book.title}</a>
                    </Link>
                  </li>
                })}
            </ul>
 */}        </>
    );
};

export default LibraryPage;