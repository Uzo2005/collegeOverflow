import Head from "next/head";
import ThemedLink from "../components/styledLinks/ThemedLink";
import SearchBox from "../components/search/SearchBox";
import StoryView from "../components/blogStory/StoryView";
import QuestionView from "../components/questionAndAnswers/QuestionView";

export default function Home() {
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
          <ThemedLink to="/stories"> Stories And Advice </ThemedLink>
        </div>
        <div className="col-start-4 col-end-5 m-auto">
          <ThemedLink to="/QandA"> Questions and Answers </ThemedLink>
        </div>

        <div className="col-span-4">
          <SearchBox placeholder="Search College Overflow.." />
        </div>

        <StoryView
          title="How I got into Stanford with an SAT score of 900"
          author="Oluwa Bezos"
          datePublished="March 14th 2021"
          tags={[
            "Stanford",
            "SAT",
            "Low Score Acceptance",
            "Legacy Admissions",
            "lorem",
            "jsfuck",
            "lorem",
            "lorem",
            "lorem",
            "lorem",
          ]}
        />

        <QuestionView>
          <h4>Is MIT Test Optional?</h4>
        </QuestionView>
        <StoryView>
          <h4>How To Approach Your Common App Essays</h4>
        </StoryView>
        <QuestionView>
          <h4>Will I Get Into Havard?</h4>
        </QuestionView>
        <StoryView>
          <h4>How To Organise Your Activities List</h4>
        </StoryView>
      </main>
    </>
  );
}
