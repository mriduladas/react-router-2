import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    
    const history = useHistory();
    const onAddQuoteHandler= (quote) => {
        console.log(quote);
        history.push('/quotes')
    }

    return(
        <QuoteForm onAddQuote={onAddQuoteHandler}></QuoteForm>
        )

}

export default NewQuote;