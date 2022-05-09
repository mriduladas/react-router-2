import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {

    const {sendRequest, status} = useHttp(addQuote);
    
    useEffect(()=>{
        if(status=== 'completed'){
            history.push('/quotes')
        }
    })
    
    const history = useHistory();
    const onAddQuoteHandler= (quote) => {
        console.log(quote);
        sendRequest(quote);
        
    }

    return(
        <QuoteForm isLoading={status==='pending'}  onAddQuote={onAddQuoteHandler}></QuoteForm>
        )

}

export default NewQuote;