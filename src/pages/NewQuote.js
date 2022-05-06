import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const onAddQuoteHandler= (quote) => {
        console.log(quote);
    }

    return(
        <QuoteForm onAddQuote={onAddQuoteHandler}></QuoteForm>
        )

}

export default NewQuote;