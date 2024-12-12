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
    name: "William C. Wonka",
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

function quotesReducer(state, action) {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, { ...action.payload, id: Math.random().toString() }];
    case "UPDATE_QUOTE":
      return state.map((quote) =>
        quote.id === action.payload.id
          ? { ...quote, ...action.payload.data }
          : quote
      );
    case "DELETE_QUOTE":
      return state.filter((quote) => quote.id !== action.payload);
    default:
      return state;
  }
}

export function QuotesContextProvider({ children }) {
  const [quotesState, dispatch] = useReducer(quotesReducer, DUMMY_QUOTES);

  function addQuote(quote) {
    dispatch({ type: "ADD_QUOTE", payload: quote });
  }

  function updateQuote(id, data) {
    dispatch({ type: "UPDATE_QUOTE", payload: { id, data } });
  }

  function deleteQuote(id) {
    dispatch({ type: "DELETE_QUOTE", payload: id });
  }

  return (
    <QuotesContext.Provider
      value={{ quotes: quotesState, addQuote, updateQuote, deleteQuote }}
    >
      {children}
    </QuotesContext.Provider>
  );
}
export default QuotesContextProvider;
