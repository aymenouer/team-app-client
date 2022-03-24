import React from 'react';
import { Spiner } from '.';
/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return <h1>ERROR: {error.message}</h1>;
  }
  if (loading) {
    return (
    
    <Spiner data-testid="spinner"  />
   
    );
  }
  if (!data) {
    return <h1>Nothing to show...</h1>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;


