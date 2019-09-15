import React from 'react';

export default function Repository({ match }) {
  return <h1>{decodeURIComponent(match.params.repository)}</h1>;
}
