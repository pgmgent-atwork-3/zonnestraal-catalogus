import { useRouter } from 'next/router';

function DetailPageBook() {
    const router = useRouter();

    const bookId = router.query.bookId;

    //send request to backend

    return (
        <>
            <h1>Here you will see the detail of a specific book</h1>
        </>
    )
}

export default DetailPageBook;