import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote"

const allQuotes = [{id:'1',author:'Author A', text:'1st quote'}, {id:'2',author:'Author B', text:'2nd quote'}];

const QuoteDetails =()=> {

    
    const params =useParams();
    //console.log('params');
    console.log('filteredQuote');
    const quote=allQuotes.filter((quote)=>quote.id===params.id)[0];
    if(!quote){
        return <p>No Quote Found</p>
    }

    return(
    <section>
        <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
        <Route path={`/quotes/${params.id}`} exact>
            <div className="centered">
                <Link to={`/quotes/${params.id}/comments`} className='btn--flat'>
                    Load Comments
                </Link>
            </div>
        </Route>
        <Route path={`/quotes/${params.id}/comments`}>
            <Comments /> 
        </Route>
    </section>)

}

export default QuoteDetails;