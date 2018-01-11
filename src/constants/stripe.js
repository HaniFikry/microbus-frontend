const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_2fagZTNYtz2xNp6qOVcR0Y2I'
  : 'pk_test_2fagZTNYtz2xNp6qOVcR0Y2I';

export default STRIPE_PUBLISHABLE;
