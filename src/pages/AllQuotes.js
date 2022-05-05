import { Link } from "react-router-dom";

const AllQuotes = () => {
    const quotes = [{id:'1', text:'1st quote'}, {id:'2', text:'2nd quote'}]
    console.log(quotes);

    return (
        <section>
            <ul>
                {quotes.map((quote)=> (
                    <Link to={'/quotes/'+ quote.id}>{quote.text}</Link>
                ))}
            </ul>
        </section>
    )

}

export default AllQuotes;