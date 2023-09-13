import Container from '@/Container/Container';
import { config } from '@/config';
import React, { use } from 'react';

// This gets called on every request
async function getData() {
  // Fetch data from external API
  const res = await fetch(`${config.dataAPI}/api/user`, { next: { revalidate: 86400 } });
  const data = await res.json();
  // Pass data to the page via props
  return { props: data };
}
const Page = () => {
  const { props } = use(getData());
  return <Container data={props} />;
};

export default Page;
