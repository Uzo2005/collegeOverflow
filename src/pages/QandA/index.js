import Head from "next/head";
import ThemedLink from "../../components/styledLinks/ThemedLink";
import SearchBox from "../../components/search/SearchBox";
import QuestionView from "../../components/questionAndAnswers/QuestionView";

export default function QuestionsPage() {
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
          <SearchBox placeholder="Search Questions..." />
        </div>

        <QuestionView>
          <h4>
            I have a Nobel Prize in Physics, is it enough to get into Harvard?
          </h4>
        </QuestionView>
        <QuestionView>
          <h4>How much time/money should I spend on SAT prep?</h4>
        </QuestionView>
        <QuestionView>
          <h4>What do you guys think of my school list?</h4>
        </QuestionView>
        <QuestionView>
          <h4>Is Minerva fake?</h4>
        </QuestionView>
        <QuestionView>
          <h4>What is College Overflow all about?</h4>
        </QuestionView>
      </main>
    </>
  );
}
