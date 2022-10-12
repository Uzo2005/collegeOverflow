import Head from "next/head";
import ThemedLink from "../../components/styledLinks/ThemedLink";
import SearchBox from "../../components/search/SearchBox";
import StoryView from "../../components/blogStory/StoryView";

export default function StoriesLandingPage() {
  return (
    <>
      <Head>
        <title>College Overflow</title>
        <meta
          name="description"
          content="A Place For High Schoolers Applying To College"
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <main className="grid grid-cols-4 gap-6 m-5">
        <div>
          <ThemedLink to="/"> Back To Home </ThemedLink>
        </div>

        <div className="col-span-4">
          <SearchBox 
            placeholder='Search For Stories...'
          />
        </div>

        <StoryView>
          <h4>First Blog Post</h4>
        </StoryView>
        <StoryView>
          <h4>Second Blog Post</h4>
        </StoryView>
        <StoryView>
          <h4>Third Blog Post</h4>
        </StoryView>
        <StoryView>
          <h4>Fourth Blog Post</h4>
        </StoryView>
        <StoryView>
          <h4>Fifth Blog Post</h4>
        </StoryView>
      </main>
    </>
  );
}
