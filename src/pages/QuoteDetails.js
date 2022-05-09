import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";



const QuoteDetails =()=> {

    const {sendRequest,status, data:loadedQuote, error} =useHttp(getSingleQuote,true);
    const params =useParams();
    useEffect(()=> {
        sendRequest(params.id);
    }, [sendRequest,params.id])
    const match =useRouteMatch();
    console.log(match);
    
    //console.log('params');
    //console.log('filteredQuote');
    //const quote=allQuotes.filter((quote)=>quote.id===params.id)[0];
    if(status=== 'pending'){
        return(
            <div className='centered'>
                <LoadingSpinner></LoadingSpinner>
            </div>
        )
    }
    if(error){
        return(
            <p className='centered focused'>{error}</p>
        )
    }

    if(!loadedQuote){
        return <p>No Quote Found</p>
    }

    return(
    <section>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}></HighlightedQuote>
        <Route path={match.path} exact>
            <div className="centered">
                <Link to={`${match.url}/comments`} className='btn--flat'>
                    Load Comments
                </Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments /> 
        </Route>
    </section>)

}

export default QuoteDetails;