import { Link } from "react-router-dom";
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [{id:'1',author:'Author A', text:'1st quote'}, {id:'2',author:'Author B', text:'2nd quote'}]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    )
}

export default AllQuotes;