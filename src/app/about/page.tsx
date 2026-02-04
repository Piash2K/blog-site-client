

export default async function aboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  throw new Error('Failed to load about page data');
  return <div>This is about page component</div>;
}
