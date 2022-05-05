import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetails =()=> {

    const allQuotes = [{id:'1', text:'1st quote'}, {id:'2', text:'2nd quote'}];
    const params =useParams();
    //console.log('params');
    console.log('filteredQuote');
    console.log(allQuotes.filter((quote)=>quote.id===params.id)[0]  );
    return(
    <section>
        <h5>ID</h5>
        <p>{params.id}</p>
        <h5>QUOTE</h5>
        <p>{allQuotes.filter((quote)=>quote.id===params.id)[0].text}</p>
        <Route path={`/quotes/${params.id}/comments`}>
            <Comments />
        </Route>
    </section>)

}

export default QuoteDetails;