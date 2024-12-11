import { createContext, useReducer } from "react";

// Dummy Data for QuotesList
const DUMMY_QUOTES = [
  {
    id: "1",
    title: "Amazing Destinations!",
    description:
      "Our packages are tailored to your needs.  We take your thoughts and considerations into account to create the perfect vacation for you.",
    name: "Robert M. Downey Jr.",
  },
  {
    id: "2",
    title: "Extremely Professional",
    description:
      "Many people have trusted us to plan their dream vacations.  We have never failed to deliver an unforgettable experience.",
    name: "Catherine Zeta-Jones",
  },
  {
    id: "3",
    title: "Never booking anywhere else!",
    description:
      "They made it easy to plan our trip.  We had a great time and will definitely be booking with them again.",
    name: "Peter Skaarsgard",
  },
  {
    id: "4",
    title: "4 Perfect Vacation",
    description:
      "My husband and I had just gotten married and we wanted to go on a honeymoon.  We had no idea where to go, but TRAVELER helped us plan the perfect vacation.",
    name: "Brenda K. Smith",
  },
  {
    id: "5",
    title: "5 WOW WOW WOW",
    description:
      "These guys know what they are doing.  They planned the perfect vacation for us.  We will definitely be booking with them again.",
    name: "Marlon Brando",
  },
  {
    id: "6",
    title: "6 Already booking our next vacation!",
    description:
      "Perfect vacation.  We had a great time and will definitely be booking with them again.  Infact, we are already planning our next vacation.",
    name: "Peter Skaarsgard",
  },
  {
    id: "7",
    title: "7 The Destinations!",
    description:
      "I couldn't believe the options they had available.  We were able to choose from so many different destinations.  We will definitely be booking with them again.",
  },
  {
    id: "8",
    title: "8 Payment Plans",
    description:
      "We are a family of 8 people so we needed a payment plan.  TRAVELER was able to set up a payment plan for us so we could afford our vacation.",
    name: "Amber Heard",
  },
  {
    id: "9",
    title: "9 THey know their stuff",
    description:
      "When we arrived we had an issue with the hotel.  We called TRAVELER and they were able to get us a new hotel within minutes.  They know their stuff.",
    name: "Tyler Perry",
  },
];

export const QuotesContext = createContext({
  quotes: [],
  addQuote: ({ title, description, name }) => {},
  deleteQuote: (id) => {},
  updateQuote: (id, { title, description, name }) => {},
});

// Create a QuotesContextProvider component this is the provider function that will hold the logic

// Use Reducer Function
// Reducer function will take two arguments: state and action

function quotesReducer(state, action) {
  // check type of actions and set them
  switch (action.type) {
    case "ADD":
      const id = Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableQuoteIndex = state.findIndex(
        (quote) => quote.id === action.payload.id
      );
      const updatableQuote = state[updatableQuoteIndex];
      const updatedItem = {
        ...updatableQuote,
        ...action.payload.data,
      };
      const updatedQuotes = [...state];
      updatedQuotes[updatableQuoteIndex] = updatedItem;
      return updatedQuotes;
    case "DELETE":
      return state.filter((quote) => quote.id !== action.payload);
    default:
      return state;
  }
}

function QuotesContextProvider({ children }) {
  // We will manage the quotes related state here
  const [quotesState, dispatch] = useReducer(quotesReducer, DUMMY_QUOTES);

  function addQuote({ quoteData }) {
    dispatch({ type: "ADD", payload: quoteData });
  }

  function deleteQuote(id) {
    dispatch({ type: "DELETE", payload: quoteId });
  }

  function updateQuote(id, quoteData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: quoteData } });
  }

  return <QuotesContext.Provider>{children}</QuotesContext.Provider>;
}

export default QuotesContextProvider;
